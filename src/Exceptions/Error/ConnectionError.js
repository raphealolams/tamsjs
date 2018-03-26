'use strict'

const baseError = require('../AppError');

const AppError = new baseError()
class ConnectionError extends baseError {
  constructor (message, status) {
    
    // Providing default message and overriding status code.
    super(message || 'Error Connecting to Device', status);
  }
}; 

module.exports.ConnectionError = new ConnectionError()