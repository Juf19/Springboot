import React from "react";

const FormClientes = ({ cliente, manejarCambio, alEnviar, titulo, textoBoton, colorBoton }) => {
    return (
        <div className="container mt-4">
            <div className="card shadow">
                <div className="card-header bg-dark text-white text-center">
                    <h3>{titulo}</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={alEnviar}>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Nombres</label>
                                <input name="nombre" value={cliente.nombre || ''} onChange={manejarCambio} type="text" className="form-control" required  />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Apellidos</label>
                                <input name="apellido" value={cliente.apellido || ''} onChange={manejarCambio} type="text" className="form-control" required />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Email</label>
                                <input name="email" value={cliente.email || ''} onChange={manejarCambio} type="email" className="form-control" required />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Teléfono</label>
                                <input name="telefono" value={cliente.telefono || ''} onChange={manejarCambio} type="tel" className="form-control" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Dirección</label>
                                <input name="direccion" value={cliente.direccion || ''} onChange={manejarCambio} type="text" className="form-control" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Fecha Nacimiento</label>
                                <input name="fecha_nacimiento" value={cliente.fecha_nacimiento || ''} onChange={manejarCambio} type="date" className="form-control" />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className={`btn ${colorBoton} px-5`}>{textoBoton}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormClientes;