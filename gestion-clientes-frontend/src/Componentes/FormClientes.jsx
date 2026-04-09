import React from 'react';

const FormularioCliente = ({ cliente, manejarCambio, alEnviar, titulo }) => {
    return (
        <div className="card p-4 shadow">
            <h2 className="text-center mb-4">{titulo}</h2>
            <form onSubmit={alEnviar}>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Nombres</label>
                        <input name="nombre" value={cliente.nombre} onChange={manejarCambio} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Apellidos</label>
                        <input name="apellido" value={cliente.apellido} onChange={manejarCambio} type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Email</label>
                        <input name="email" value={cliente.email} onChange={manejarCambio} type="email" className="form-control" />
                    </div>
                    {/* ... (añade los demás campos aquí) ... */}
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                    {cliente.id ? "Actualizar Cliente" : "Guardar Nuevo Cliente"}
                </button>
            </form>
        </div>
    );
};

export default FormularioCliente;