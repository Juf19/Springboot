import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClienteServicio from "../Servicios/ClienteServicio";
import FormClientes from "./FormClientes";

const EditarClientes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // 1. El estado donde se guarda lo que el usuario escribe
    const [cliente, setCliente] = useState({ 
        nombre: '', 
        apellido: '', 
        email: '', 
        telefono: '', 
        direccion: '', 
        fecha_nacimiento: '' 
    });

    // 2. Cargar los datos actuales del cliente al entrar a la página
    useEffect(() => {
        ClienteServicio.obtenerClientePorId(id)
            .then(res => {
                console.log("JSON REAL QUE LLEGÓ:", res.data);
                setCliente(res.data); // Llenamos el formulario con los datos del backend
            })
            .catch(err => console.error("Error al cargar datos:", err));
    }, [id]);

    // 3. ¡EL INDISPENSABLE! Actualiza el estado mientras el usuario escribe
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setCliente({ 
            ...cliente, 
            [name]: value 
        });
    };

    // 4. Enviar los cambios finales al backend
    const actualizar = (e) => {
        e.preventDefault();
        ClienteServicio.editarCliente(id, cliente)
            .then(() => {
                navigate('/'); 
            })
            .catch(error => {
                console.error("Error en el PUT:", error);
                alert("No se pudo actualizar el cliente.");
            });
    };

    return (
        <FormClientes 
            titulo="Actualizar Datos del Cliente" 
            textoBoton="Actualizar" 
            colorBoton="btn-primary"
            cliente={cliente}          
            manejarCambio={manejarCambio} 
            alEnviar={actualizar}      
        />
    );
};

export default EditarClientes;