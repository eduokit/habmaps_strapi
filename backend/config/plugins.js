const crypto = require('crypto');
//
module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
  },
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
    // ...
    io: {
      "enabled": true,
      "config": {
        "IOServerOptions" :{
          "cors": { "origin": '*', "methods": ["GET"] },
        },
        "contentTypes": {
          "message": "*",
          "status":["update","create","publish","unpublish"],
          "frame":["update","create","publish","unpublish"],
          "last-seen":["update","create","publish","unpublish"]
        },
        "events":[
          {
            "name": "connection",
            "handler": ({ strapi }, socket) => {
              strapi.log.info(`[io] new connection with id ${socket.id}`);
            },
          },
        ]
      },
    },
  // ...
  });