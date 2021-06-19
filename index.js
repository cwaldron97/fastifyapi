const fastify = require('fastify')()

fastify.get('/', function (request, reply){
    reply.send({ hello: 'world'})
})

fastify.listen(5000, function (err, address) {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
    
})
