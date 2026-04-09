import React, { useState, useEffect } from "react";
import ClienteServicio from "../Servicios/ClienteServicio";
import { useNavigate } from "react-router-dom";

const AgregarClientes = () => {
    const [cliente, setCliente] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
        fecha_nacimiento: ''
    });
    const navigate = useNavigate();
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };
    const guardarCliente = (e) => {
        e.preventDefault();

        ClienteServicio.crearCliente(cliente)
            .then(response => {
                console.log("Cliente guardado con éxito:", response.data);
                navigate('/clientes');
            })
            .catch(error => {
                console.error("Error al guardar:", error);
                alert("Hubo un error al guardar el cliente");
            });
            };
    return (
        <div>
            <h1>Agregar Clientes</h1>
            <form onSubmit={guardarCliente}>
                <div className="row">

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Nombres</label>
                        <input type="text" className="form-control" placeholder="Nombres" />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Apellidos</label>
                        <input type="text" className="form-control" placeholder="Apellidos" />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="email" />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Dirección</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Fecha de Nacimiento</label>
                        <input type="date" className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-2">
                        <button type="submit" className="btn btn-primary">
                            Guardar Cliente
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );

};

export default AgregarClientes;