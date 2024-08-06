module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@components': './src/components/',
          '@config': './src/config',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens/',
          '@fonts': './src/assets/fonts',
          '@colors': './src/constants/colors',
          '@api': './src/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
