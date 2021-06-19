const fastify = require('fastify')()
fastify.register(require('./routes/catch'))
fastify.register(require('./routes/pokedex'))
fastify.register(require('fastify-postgres'), {
    connectionString: 'postgres://postgres@localhost/postgres'
  })


fastify.listen(5000, function (err, address) {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
    
})
