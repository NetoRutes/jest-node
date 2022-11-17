import request from 'supertest'
const app = require('./server')

describe('Users route', () => {
    test('should get user wtesth with code 200 and message and data', async () => {
        const res = await request(app).get('/users/1')
        console.log(res.body)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toBe("Dukeza")
    })

    it('should get user with name in query param', async () => {
        const res = await request(app).get('/users?name=Wellington')
        console.log(res.body)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message');
    })
})