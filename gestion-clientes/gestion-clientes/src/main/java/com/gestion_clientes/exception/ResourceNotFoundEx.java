package com.gestion_clientes.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundEx extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public ResourceNotFoundEx(String message) {
        super(message);
    }
}
