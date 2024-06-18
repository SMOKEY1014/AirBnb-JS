const auth = require('json-server-auth');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Bind the router db to the app
server.db = router.db;

// Add authorization middleware
server.use(auth);

// Use default router
server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`JSON server is running on port ${PORT}`)
})