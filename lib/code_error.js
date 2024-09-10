const CodeError = function(message, code_integer, code_string = "error_general") {
    this.message = message;
    this.code = code_integer;
    this.code_string = code_string;
}

CodeError.prototype = new Error();

module.exports = CodeError;
