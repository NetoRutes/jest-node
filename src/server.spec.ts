import request from 'supertest'
import axios from 'axios';
const app = require('./server')

jest.mock('axios');
(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({});

describe('Users route', () => {
    test('should get user wtesth with code 200 and message and data', async () => {
        const res = await request(app).get('/users/1')
        console.log(res.body)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toBe("Dukeza")
    })

    test('should get user with name in query param', async () => {
        const res = await request(app).get('/users?name=Wellington')
        console.log(res.body)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message');
    })

    test('should call axious get with right endpoint', async () => {
        const users = [{name: 'Bob'}];
        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ status: 200, data: {users}});

        const res = await request(app).get('/external-users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('data');
        expect(res.body.data).toStrictEqual({"users": users})
    })
})