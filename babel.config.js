const path = require('path');

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-fbt-runtime',
    ['babel-plugin-fbt', {
      fbtEnumPath: path.join(__dirname, 'i18n/fbt/.enum_manifest.json'),
      extraOptions: { __self: true },
    },
    ],
  ],
};
