const API = require('../../src/api/api')
const data = require('../mock/login.json')

module.exports = function (app) {
  app.post(API.login.url, (request, response) => {
    response.json(data)
  })
}
