const {
  shareAll,
  withNativeFederation,
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
} = require('@softarc/native-federation/build');

// eslint-disable-next-line no-undef
module.exports = withNativeFederation({
  name: 'mfe-one',

  exposes: {
    './routes': './src/routes.tsx',
  },

  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto',
    includeSecondaries: false,
  }),
  skip: ['react-dom/server', 'react-dom/server.node'],
});
