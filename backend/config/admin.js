module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b64cc0a9a08b453ff483832956ddaa17'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'b64cc0a9a08b453ff483832956ddaa18'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'b64cc0a9a08b453ff483832956ddaa19'),
    },
  },
});
