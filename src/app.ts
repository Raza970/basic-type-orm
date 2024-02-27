import "reflect-metadata"
import { DataSource } from "typeorm"
import  express  from "express";
// import { Photo } from "./entity/Photo"
import {User} from "./entity/users"

const app = express();
app.use(express.json());

const port = 3000;

app.get("/",async function (req,res) {
    // res.send("Hello World")
    const users = await AppDataSource.getRepository(User).find()
    res.send(users)
})

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "admin",
    database: "test",
    entities: [User],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        
        // here you can start to work with your database
        console.log("Connected to database!")
    })
    .catch((error) => console.log("Not Connected",error))
    
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})