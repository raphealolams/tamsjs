'use strict'

import AppError from './AppError';

class UnrecognizedCommand extends AppError {
  constructor (message, status) {
    
    // Providing default message and overriding status code.
    super(message || 'Command Not Found!', status);
  }
}

export default UnrecognizedCommand = new UnrecognizedCommand()