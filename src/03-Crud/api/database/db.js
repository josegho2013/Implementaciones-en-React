import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "../database/db.js"
//importamos nuestro enrutador
import router from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/personajes', router)

app.listen(1337, () => {
    console.log('Server UP running in http://localhost:1337/')
})