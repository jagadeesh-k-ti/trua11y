import {http, HttpResponse} from 'msw';

export const handlers = [
    http.get('/api/hello', () => {
        return HttpResponse.text("Hello from mock server!")
    }),

    http.post('/api/submit', async ({request}) => {

        const body = await request.json()

        if(!body) {
            return HttpResponse.json("Error!", {status: 400})
        }
       
        return HttpResponse.json({fontSize: '16px'}, {status: 200})
    })
]