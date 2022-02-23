import React from "react";
import { useState } from "react";
// import { connect } from "../database/db";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
// import "../css/styles.css"

// const palo = [
//   { id: 1, personaje: "Naruto", anime: "Naruto" },
//   { id: 2, personaje: "Goku", anime: "Dragon Ball" },
//   { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
//   { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
//   {
//     id: 5,
//     personaje: "Edward Elric",
//     anime: "Fullmetal Alchemist: Brotherhood",
//   },
//   { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
// ];
// console.log("01INFO", info)

const Crud = () => {
  const [info, setInfo] = useState();
  const [modalEditar, setModalEditar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [input, setInput] = useState({
    id: 0,
    personaje: "",
    anime: "",
  });

  const mostrarModalEditar = (dato) => {
    setInput(dato);
    setModalEditar(true);
  };

  const cerrarModalEditar = () => {
    setModalEditar(false);
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const insertar = () => {
    //id: info.length + 1,
    let test = info;
    test.push(input);
    setInfo(test);
    setModalInsertar(false);
  };

  const editar = (dato) => {
    var contador = 0;
    var arreglo = info;

    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }

      contador++;
    });
    setInput(arreglo);
    setModalEditar(false);
  };

  const eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.id
    );
    if (opcion == true) {
      var contador = 0;
      var arreglo = info;
      arreglo.map((item) => {
        if (dato.id == item.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      setInput({ data: arreglo, modalActualizar: false });
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
     
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Container>
        <br />
        <Button color="success" onClick={() => mostrarModalInsertar()}>
          Insertar Nuevo Personaje
        </Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Personaje</th>
              <th>Anime</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {info.length > 0 &&
              info?.map((dato) => {
                return (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.personaje}</td>
                    <td>{dato.anime}</td>

                    <td>
                      <Button
                        color="primary"
                        onClick={() => mostrarModalEditar(dato)}
                      >
                        Editar
                      </Button>{" "}
                      <Button color="danger" onClick={() => eliminar(dato)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input
              className="form-control"
              readOnly
              name="id"
              type="text"
              value={input.id || ""}
            />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input
              className="form-control"
              name="personaje"
              type="text"
              onChange={(e) => handleChange(e)}
              value={input.personaje}
            />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={(e) => handleChange(e)}
              value={input.anime}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => editar(input)}>
            Editar
          </Button>
          <Button color="danger" onClick={() => cerrarModalEditar()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Personaje</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={info?.length + 1 || 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input
              className="form-control"
              name="personaje"
              type="text"
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={(e) => handleChange(e)}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => insertar()}>
            Insertar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Crud;




// [
//   {"personaje": "Naruto",
//   "anime": "Naruto" },
  
//   { "personaje": "Goku", 
//   "anime": "Dragon Ball" },
  
//   { "personaje": "Kenshin Himura",
//   "anime": "Rurouni Kenshin" },
  
//   {  "personaje": "Monkey D. Luffy", 
//   "anime": "One Piece" },
  
    
//     {"personaje": "Edward Elric",
//     "anime": "Fullmetal Alchemist: Brotherhood",
//   },
  
//   { "personaje": "Seto Kaiba",
//    "anime": "Yu-Gi-Oh!" }
// ]