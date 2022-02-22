const mongoose = require("mongoose");

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

const crear = async () => {
  const paises = new ContinenteModel({
    pais: "colombia",
    capital: "bogota",
    poblacion: "8",
  });

  const resultado = await paises.save();
  console.log(resultado);
};

const actualizar = async (id) => {
  const capital = await ContinenteModel.updateOne(
    { _id: id },
    {
      $set: {
        pais: "portugal modificado",
        capital: "lisboa modificado",
      },
    }
  );
};

const eliminar = async (id) => {
  const pais = await ContinenteModel.deleteOne({ _id: id });
  console.log(pais);
};

//llamada a los procedimientos
//mostrar();
//crear()
//actualizar("621422416c83af9c39062990")
//eliminar("621422416c83af9c39062990");
