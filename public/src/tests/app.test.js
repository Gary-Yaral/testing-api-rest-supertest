const { app } = require('../app')
const supertest = require('supertest')
const api = supertest(app)
const User = require('../model/user')
require('../db/mongo')
const { userDataTest } = require('../constants') 

beforeEach(async() => {
  await User.deleteMany()
})

describe('test GET "/user"', () => {
  test('recieve all data', async () => {
     let response = await api.post('/api/create').send(userDataTest)
     expect(response.status).toBe(200)
     console.log(response.body)
  })

})

afterAll(() => {
  require('mongoose').connection.close()
})