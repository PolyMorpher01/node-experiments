module.exports = {
  httpErr: {
    INTERNAL_SERVER_ERROR: { code: 500, message: 'Internal Server Error' },
    BAD_REQUEST: { code: 400, message: 'Bad Request' },
    METHOD_NOT_ALLOWED: { code: 405, message: 'Method Not Allowed' }
  },

  generalErr: {
    VALIDATION_ERROR: 'Validation error',
    INVALID_TOKEN: 'Invalid token'
  }
};
