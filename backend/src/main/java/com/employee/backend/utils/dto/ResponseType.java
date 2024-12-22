package com.employee.backend.utils.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * Classe qui contient la structure des réponses uniformes
 *
 */
@Getter
@Setter
@AllArgsConstructor
public class ResponseType<T> {
    private String message;
    private T data;

    public ResponseType(String message) {
        this.message = message;
    }
}