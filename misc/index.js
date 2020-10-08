const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const fastify = require('fastify')();
const port = 3000;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', worker => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
	fastify.get('/', async (request, reply) => {
	  reply.type('application/json').code(200)
	  return { hello: 'world' }
	})

  fastify.listen(port, () => {
    console.log(`Fastify "Hello World" listening on port ${port}, PID: ${process.pid}`);
  });
}