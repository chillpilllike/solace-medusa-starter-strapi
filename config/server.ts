export default ({ env }) => ({
  url: env('PUBLIC_URL', 'https://strapi.elestio.com'),
  host: env('HOST', '0.0.0.0'),
  proxy: env.bool('IS_PROXIED', true),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
