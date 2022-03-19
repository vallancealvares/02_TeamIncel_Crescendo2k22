import express = require("express");
const app = express()
import User from "./entities/User";
import UserController from "./controllers/userController";




import {createConnection} from 'typeorm'
import cors = require('cors')
import bodyParser = require('body-parser')
const router = express.Router()


const main = async () => {

    app.use(bodyParser.json())
    app.use(cors({origin: "http://localhost:3000", credentials: true}))

    //Creating database connection
    await createConnection({
        type: 'postgres',
        host: "localhost" as string,
        port: 5432 as any,
        username: 'postgres' as string,
        password: "Sachi@2020" as string,
        database: "postgres" as string,
       // ---
   
    // ---
       synchronize: true,
        entities: [
         User
        ],
        logging: true
    })

    router.post('/user', UserController.create)


    app.use('/api', router)

    app.listen(3300, () => {
        console.log(`App listening at http://localhost:3300/api`)
    })
}

main()