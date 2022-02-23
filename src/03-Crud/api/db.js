const mongoose = require("mongoose");

const url = "mongodb://localhost/personajes";

async function connect() {
  try {
    await mongoose
      .connect(url)
      .then(() => console.log("conectado a MongoDb..."))
      .catch((err) => console.log("No se pudo conectar con MongoDb..", err));
  } catch (err) {
    console.log(err);
  }
}

connect()