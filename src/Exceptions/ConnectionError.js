const AppError = require('./Error/AppError');
module.exports = class ConnectionError extends AppError {
  constructor (message) {
    
    // Providing default message and overriding status code.
    super(message || 'Error Connecting to Device', 400);
  }
};