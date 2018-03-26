'use strict'

const baseError = require('../AppError');
const AppError = new baseError()

module.exports = class UnrecognizedCommand extends AppError {
  constructor (message, status) {
    
    // Providing default message and overriding status code.
    super(message || 'Command Not Found!', status);
  }
}