module.exports = {
  'presets': [
    ['@babel/preset-env', {
      corejs: 3,
      useBuiltIns: 'usage',
    }],
  ],
  'plugins': [
    ['@babel/plugin-transform-runtime', {
      corejs: 3,
    }],
    ['angularjs-annotate', { explicitOnly: true }],
  ],
};
