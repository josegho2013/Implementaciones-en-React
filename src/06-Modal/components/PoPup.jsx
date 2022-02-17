import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const PoPup = () => {
  const [abierto, setAbierto] = useState(false);

   const abrirModal = () => {
    setAbierto(true)
  };

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      <div className="principal">
        <div className="secundario">
          <Button color="success" onClick={abrirModal}>
            {" "}
            Mostrar Modal
          </Button>
        </div>
      </div>
      <Modal isOpen={abierto} style={modalStyles}>
        <ModalHeader> Iniciar Sesion</ModalHeader>

        <ModalBody>
          <FormGroup>
            <Label form="usuario"> Usuario </Label>
            <Input type="text" Id="usuario" />
          </FormGroup>

          <FormGroup>
            <Label form="password"> Contraseña </Label>
            <Input type="text" Id="password" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Iniciar seccion</Button>
          <Button color="danger" onClick={abrirModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
      ;
    </>
  );
};

export default PoPup;
