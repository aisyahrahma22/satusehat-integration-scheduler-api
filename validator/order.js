const {integer} = require("../lib/validator")

module.exports.updTeleconsult = {
    dt: [
        {type: "string", min: 10, required: true, max: 10, message: "String has to be 10 character"},
        {pattern: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/ig, message: "Not Valid date format"}
    ]
}



