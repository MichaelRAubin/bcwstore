import express from "express"
import bp from "body-parser"
import DbContext from "./db/dbconfig"
import ApparelController from "./controllers/ApparelController"

let server = express()
let port = 3000

DbContext.connect();

//NOTE Register Middleware
server.use(bp.json());


//NOTE REGISTER ROUTERS HERE
server.use('/api/apparel', new ApparelController().router);


//NOTE Default error handler and route
server.use((req, res, next) => {
    res.status(404).send("Route not Found")
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(400).send(err)
})

server.listen(port, () => {
    console.log("Server running on port", port)

})