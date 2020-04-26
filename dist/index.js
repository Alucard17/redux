
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./pubnub-redux.cjs.production.min.js')
} else {
  module.exports = require('./pubnub-redux.cjs.development.js')
}
