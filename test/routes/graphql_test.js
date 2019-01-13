const request = require('supertest')
const assert = require('assert')
const helper = require('../test_helper')
const app = require('../../src/app')

describe('routes/graphql', () => {
  before(() => {
    return helper.syncDatabase()
  })

  beforeEach(() => {
    return helper.importFixtures('all').then(() => {
      return helper.getValidToken().then(token => {
        this.token = token
      })
    })
  })

  describe('login', () => {
    it('should teacher login', (done) => {
      request(app)
        .post('/graphql')
        .send({
          email: 'joao@graphql-study.com',
          password: '123456'
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          console.log(res.body)
          assert(res.body.success)
          done()
        })
    })
  })
})
