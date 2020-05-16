import request from 'supertest'
import server from 'server'

describe('server', () => {
  it('works', async () => {
    const response = await request(server).get('/')

    expect(response.status).toEqual(200)
    expect(response.text).toEqual('Hello World!')
  })
})
