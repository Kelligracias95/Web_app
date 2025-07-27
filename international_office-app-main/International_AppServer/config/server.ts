export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '+TuUxgPGU7ug+UcUOMge4w=='),
    },
  },
  app: {
    keys: env.array('APP_KEYS', ['defaultKeyA', 'defaultKeyB']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:8100'], 
    },
  },
});
