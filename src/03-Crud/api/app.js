// const express = require("express");
// const cors = require("cors");
// const db = require("./database/db");
// console.log("entro")
import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
import routes from "./routes/routes.js";
//import router ("./routes/routes.js");
//importamos nuestro enrutador

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/personaje", routes);

app.listen(1337, () => {
  console.log("Server UP running in http://localhost:1337/");
});
