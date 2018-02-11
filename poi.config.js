const _ = require('lodash')
const path = require('path')

// setting for building docs
module.exports = (options, req) => ({
  entry: './src/index.ts',
  dist: 'public',

  presets: [
    require('poi-preset-react')(options),
    require('poi-preset-typescript')(options)
  ],

  transformModules: [],

  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  webpack (config) {
    config = _.assign(config, {
      // devtool: 'cheap-module-source-map',
      node: {
        module: 'empty',
        fs: 'empty'
      }
    })

    return config
  }
})
