import React, { useState, useEffect } from "react";

const AgregarClientes = () => {
    return (
        <div>
            <h1>Agregar Clientes</h1>
            <form>
                <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="colFormLabel" />
                    </div>
                </div>
                <div class="form-group row">
                    <label>Apellido</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="form-group row">
                    <label>Email</label>
                    <input type="email" className="form-control" />
                </div>
                <div class="form-group row">
                    <label>Teléfono</label>
                    <input type="tel" className="form-control" />
                </div>
                <div class="form-group row">
                    <label>Dirección</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="form-group row">
                    <label>Fecha de Nacimiento</label>
                    <input type="date" className="form-control" />
                </div>
                <div class="form-group row">
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