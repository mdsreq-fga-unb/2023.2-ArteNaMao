module.exports = ({ env }) => ({
    plugins: {
      'users-permissions': {
        jwtSecret: env('JWT_SECRET'),
      },
    },
  });
  