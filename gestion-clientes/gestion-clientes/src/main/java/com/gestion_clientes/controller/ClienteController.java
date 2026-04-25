package com.gestion_clientes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion_clientes.model.Cliente;
import com.gestion_clientes.repository.ClienteRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ClienteController {
    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/clientes")
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    @PostMapping("/clientes")
    public ResponseEntity<Cliente> crearCliente(@RequestBody Cliente cliente) {
        Cliente nuevoCliente = clienteRepository.save(cliente);
        return new ResponseEntity<>(nuevoCliente, HttpStatus.CREATED);
    }
    @GetMapping("/clientes/{id}")
    public ResponseEntity<Cliente> obtenerClientePorId(@PathVariable Long id) {
    Cliente cliente = clienteRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("No existe el cliente con el ID: " + id));
    return ResponseEntity.ok(cliente);
}

    @PutMapping("clientes/{id}")
    ResponseEntity<Cliente> actualizarCliente(@PathVariable Long id, @RequestBody Cliente detallesCliente) {
   
    Cliente clienteExistente = clienteRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("No existe el cliente con el ID: " + id));
        clienteExistente.setNombre(detallesCliente.getNombre());
        clienteExistente.setApellido(detallesCliente.getApellido());
        clienteExistente.setEmail(detallesCliente.getEmail());
        clienteExistente.setTelefono(detallesCliente.getTelefono());
        clienteExistente.setDireccion(detallesCliente.getDireccion());
        clienteExistente.setFecha_nacimiento(detallesCliente.getFecha_nacimiento());

    Cliente clienteActualizado = clienteRepository.save(clienteExistente);
    return ResponseEntity.ok(clienteActualizado);
    }
}
