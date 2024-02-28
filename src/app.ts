import "reflect-metadata"
import { DataSource } from "typeorm"
import  express  from "express";
import {User} from "./users"

const app = express();
app.use(express.json());

const port = 3000;

app.get("/",async function (req,res) {
    // res.send("Hello World")
    const users = await AppDataSource.getRepository(User).find()
    res.json(users)
})

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "Malik@321",
    database: "typeorm",
    entities: [User],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        
        // here you can start to work with your database
        console.log("Connected to database!!")
    })
    .catch((error) => console.log("Not Connected",error))
    
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})