import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "http://localhost:8080/api", 
    headers: {
        'Content-Type': 'application/json'
    }
});

class ClienteServicio {
    obtenerClientes() {
    
        return clienteAxios.get("/clientes"); 
    }
}

export default new ClienteServicio();