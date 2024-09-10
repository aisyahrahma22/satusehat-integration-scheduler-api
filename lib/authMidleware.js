import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const jwtSecret = process.env.JWT_KEY;

// Middleware for authentication based on roles
export const Authentication = (access) => {
  return (req, res, next) => {
    const roles = access.split(',');

    // Check for authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Authentication required" });
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Authentication failed", details: err.message });
      }

      // Check if the user's role is authorized
      if (roles.includes(decoded.role)) {
        return next();
      } else {
        return res.status(403).json({ error: "Authentication failed" });
      }
    });
  };
};

// Function to generate JWT token
export const genJwt = () => {
  const exp = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour expiration
  const token = jwt.sign(
    { 
      userId: 1,
      profileId: 1,
      role: "user",
      exp,
      iss: "myAppName",
      aud: "myAppAudience"
    },
    jwtSecret,
    { algorithm: 'HS256' }
  );

  return token;
};
