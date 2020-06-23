module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-spec-reporter') // Add this
      ],
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, './coverage'),
        reports: ['html', 'lcovonly'],
        fixWebpackSourcePaths: true
      },
      reporters: ['spec', 'kjhtml'], // Update progress to spec
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: process.env.CI !== 'true',
      browsers: ['ChromeHeadless'],
      singleRun: false
    });
  };