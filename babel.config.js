module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      [
          'module-resolver',
          {
              root: ['./src'],
              extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
              alias: {
                  '@src': './src',
                  '@assets': './src/assets',
                  '@components': './src/components',
                  '@containers': './src/containers',
                  '@modules': './src/modules',
                  '@store': './src/store',
                  '@utils': './src/utils',
                  '@themes': './src/themes',
                  '@hooks': './src/hooks',
                  '@models': './src/models',
                  '@routes': './src/routes',
                  '@view': './src/view',
                  '@viewModels': './src/viewModels',
              },
          },
      ],
      'babel-plugin-styled-components'
  ],
};
