module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  globals: {
    'ts-jest': {
      babelConfig: require('./babel.config.js')
    }  
  }
}
