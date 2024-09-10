var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var CryptoJS = require('crypto-js');
import 'dotenv/config'

module.exports = {

  hash: (password) => {
    salt = 10;
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
  },

  hashpin: (pin) => {
    salt = 10;
    return new Promise((resolve, reject) => {
      bcrypt.hash(pin, salt, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
  },

  compare: (expected, hash) =>
    new Promise((resolve, reject) => {
      bcrypt.compare(expected, hash, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    }
  ),

  hashEncodeName: (sourceData) =>{
    if (!sourceData) {
      return "";
    } else {
      sourceData = sourceData.toString().toLowerCase();
      const json = JSON.stringify(sourceData);
      const encodedData = Buffer.from(json).toString("base64");

      return `${encodedData}!${createDigest(encodedData, "base64")}`;
    }
  },

  hashEncode: (sourceData) =>{
    if (!sourceData) {
      return "";
    } else {
      const json = JSON.stringify(sourceData);
      const encodedData = Buffer.from(json).toString("base64");

      return `${encodedData}!${createDigest(encodedData, "base64")}`;
    }
  },

  hashDecode: (value) =>{
    if (!value) {
      return "";
    } else if (value.split("!").length === 1) {
      return value;
    } else {
      let [encodedData, sourceDigest] = value.split("!");

      if (!encodedData || !sourceDigest) {
        return "";
      }

      const json = Buffer.from(encodedData, "base64").toString("utf8");
      const decodedData = JSON.parse(json);
      const checkDigest = createDigest(encodedData);
      const digestsEqual = crypto.timingSafeEqual(
        Buffer.from(sourceDigest, "base64"),
        checkDigest
      );

      if (!digestsEqual) {
        return "";
      }

      return decodedData;
    }
  },

  decode: (accessToken) => {
    try {
      return jwt.verify(accessToken, sails.config.passport.strategies.jwt.config.secretOrKey);
    }catch(err) {
      console.log(err);
      return false;
    }
  },
};

const createDigest = (encodedData, format) => {
  return crypto
    .createHmac('sha256', process.env.SECRET_KEY)
    .update(encodedData)
    .digest(format);
};