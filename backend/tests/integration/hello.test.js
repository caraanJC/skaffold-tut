const request = require('supertest')
const app = require('../../src/app')
const router = request.agent(app)

describe('Hello', () => {
    it('can access /', async () => {
        const res = await router.get('/')

        expect(res.statusCode).toEqual(200)
    })
})