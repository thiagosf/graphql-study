const pAll = require('p-all')

module.exports = {
  isDev () {
    return process.env.NODE_ENV === 'dev'
  },
  queuePromises (promises, concurrency = 1) {
    return pAll(promises, { concurrency: concurrency })
  }
}
