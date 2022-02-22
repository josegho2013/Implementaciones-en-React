const mongoose = require("mongoose");

// const url = "";
const url = "mongodb://localhost/continentes";

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
connect();
const continenteSchema = mongoose.Schema({
  pais: String,
  capital: String,
  poblacion: Number,
});

const ContinenteModel = mongoose.model("continentes", continenteSchema);

//mostrar registros

const mostrar = async () => {
  const pais = await ContinenteModel.find();
  console.log(pais);
};

mostrar();
