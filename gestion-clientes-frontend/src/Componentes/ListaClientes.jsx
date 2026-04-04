import React, { useState, useEffect } from "react";
import ClienteServicio from "../Servicios/ClienteServicio";

const ListaClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        ClienteServicio.obtenerClientes()
            .then(response => {
                console.log("Datos desde Axios:", response.data);
                setClientes(response.data);
            })
            .catch(error => {
                console.error("Error al conectar con el servidor:", error);
            });
    }, []);
    return (
        <div className="container mt-5">
            <h1 className="text-center">Lista de Clientes</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes?.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaClientes;