const path = require('path')

module.exports = function (wallaby) {
  return {
    files: [
      'tsconfig.json',
      'src/**/*.ts',
      'test/helper/**/*.ts',
    ],

    tests: [
      'test/**/*.test.ts',
      'tests/**/*.snap',
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    setup: function (wallaby) {
      const jestConfig = require('./package.json').jest;
      jestConfig.modulePaths = jestConfig.modulePaths.map(p => p.replace('<rootDir>', wallaby.projectCacheDir));
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest'
  }
}
