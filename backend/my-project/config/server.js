module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array(['r+0wgRgf1bD1tpcKroCC/A==','LkUONnbJIL6l6OMZlOCfBA==','O9MZOMIqsk8Dq/8uxma/Bg==','zpxBTKgwFmHWO7rv2ROzNg==']),
  },
  middleware: {
    app: {
      keys: ['myKeyA', 'myKeyB'],
    },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
