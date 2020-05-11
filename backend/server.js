const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)




// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})