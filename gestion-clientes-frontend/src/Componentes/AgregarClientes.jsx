import React, { useState } from "react";
import ClienteServicio from "../Servicios/ClienteServicio";
import { useNavigate } from "react-router-dom";
import FormClientes from "./FormClientes";

const AgregarClientes = () => {
    const [cliente, setCliente] = useState({ nombre: '', apellido: '', email: '', telefono: '', direccion: '', fecha_nacimiento: '' });
    const navigate = useNavigate();

    const manejarCambio = (e) => setCliente({ ...cliente, [e.target.name]: e.target.value });

    const guardar = (e) => {
        e.preventDefault();
        ClienteServicio.crearCliente(cliente).then(() => navigate('/clientes'));
    };

    return (
        <FormClientes 
            titulo="Registrar Nuevo Cliente" 
            textoBoton="Guardar" 
            colorBoton="btn-primary"
            cliente={cliente} 
            manejarCambio={manejarCambio} 
            alEnviar={guardar} 
        />
    );
};

export default AgregarClientes;