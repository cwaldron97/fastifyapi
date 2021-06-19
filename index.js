const fastify = require('fastify')()

fastify.register(require('./routes/pokedex'),{prefix:'./pokedex'})

fastify.listen(5000, function (err, address) {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    else{
        console.log("Server is listening on Port 5000")
    }
})
