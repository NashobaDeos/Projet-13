module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd7bfaee7fafbda3467f3c8593a9058f7'),
  },
});
