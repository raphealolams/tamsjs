'use strict'

import AppError from './AppError';


class ConnectionError extends AppError {
  constructor (message, status) {
    
    // Providing default message and overriding status code.
    super(message || 'Error Connecting to Device', status);
  }
}; 

export default ConnectionError = new ConnectionError()