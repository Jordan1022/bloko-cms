module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '293146526156694aad75a2b27834bbec'),
  },
});
