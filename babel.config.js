module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],

          '@dal/*': ['./src/dal/*'],
          '@dal': ['./src/dal'],
          '@entities/*': ['./src/dal/entities/*'],
          '@entities': ['./src/dal/entities'],
          '@repositories/*': ['./src/dal/repositories/*'],
          '@repositories': ['./src/dal/repositories'],

          '@bll/*': ['./src/bll/*'],
          '@bll': ['./src/bll'],
          '@services/*': ['./src/bll/services/*'],
          '@services': ['./src/bll/services'],
          '@models/*': ['./src/bll/models/*'],
          '@models': ['./src/bll/models'],

          '@ui/*': ['./src/ui/*'],
          '@ui': ['./src/ui'],
          '@components/*': ['./src/ui/components/*'],
          '@components': ['./src/ui/components'],
          '@navigation/*': ['./src/ui/navigation/*'],
          '@navigation': ['./src/ui/navigation'],
          '@screens/*': ['./src/ui/screens/*'],
          '@screens': ['./src/ui/screens'],
          '@viewModels/*': ['./src/ui/viewModels/*'],
          '@viewModels': ['./src/ui/viewModels'],

          '@utils/*': ['./src/utils/*'],
          '@utils': ['./src/utils'],
        },
      },
    ],
  ],
};
