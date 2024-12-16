import { server } from "./src/server.js"


const PORT = process.env.PORT || 5000

server.listen(PORT, (e) => {
    console.log(`SERVER RUNNING IN PORT ${PORT}`)
})