import React, { useState, useEffect } from "react";

const AgregarClientes = () => {
    return (
        <div>
            <h1>Agregar Clientes</h1>
            <form>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input type="tel" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Fecha de Registro</label>
                    <input type="date" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default AgregarClientes;