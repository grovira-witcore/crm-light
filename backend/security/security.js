if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod-security.js')
}
else {
  module.exports = require('./dev-security.js')
}