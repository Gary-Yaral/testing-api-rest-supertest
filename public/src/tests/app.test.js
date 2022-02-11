const { app } = require('../app')
const supertest = require('supertest')
const api = supertest(app)
const User = require('../model/user')
require('../db/mongo')
const { userDataTest } = require('../constants') 


describe('test GET "/user"', () => {
  beforeEach(async() => {
    await User.deleteMany({})
  })
  test('all data was received', async () => {
     let response = await api.post('/api/create').send(userDataTest)
     expect(response.status).toBe(200)
  })

  test('return all data', async () => {
    let response = await api.get('/api/get-all').send()
    expect(response.status).toBe(200)
 })

  
  afterAll(() => {
    require('mongoose').connection.close()
  })
})
