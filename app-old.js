const http = require('http');



http.createServer((req, response) =>{

    response.write('Hola mundo')
    response.end()
})
.listen( 8080 )

