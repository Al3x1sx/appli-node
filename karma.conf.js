module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        // adapte les patterns de fichiers à ton projet
        'src/**/*.spec.ts'
      ],
      preprocessors: {
        '**/*.ts': ['webpack']
      },
      webpack: {
        // adapte ce bloc à ton build Angular/TypeScript
        module: {
          rules: [
            {
              test: /\.ts$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
          ]
        },
        resolve: {
          extensions: ['.ts', '.js']
        }
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['ChromeHeadlessNoSandbox'],
      singleRun: true,
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: [
            '--no-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--headless',
            '--remote-debugging-port=9222'
          ]
        }
      },
      browserNoActivityTimeout: 60000
    });
  };
  