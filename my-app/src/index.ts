import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { compose } from 'node:stream'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/say/:message', (c) => {
  return c.text(`Hello ${c.req.param('message')}!`)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  COMPOSED_HANDLER.log(`sever is running on http://localhost:$(info.port)`)
})