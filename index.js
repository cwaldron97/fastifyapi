const fastify = require('fastify')()
const dbconnector = require('./db')
fastify.register(dbconnector)
fastify.register(require('./routes/catch'))
fastify.register(require('./routes/pokedex'))


fastify.listen(5000, function (err, address) {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
    
})
