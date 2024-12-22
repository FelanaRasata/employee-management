package com.employee.backend.utils.validation;

import com.employee.backend.utils.dto.ResponseType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseType<?>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        FieldError firstError = (FieldError) ex.getBindingResult().getAllErrors().get(0);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new ResponseType<>(firstError.getDefaultMessage()));
    }

    @ExceptionHandler(CustomException.class)
    public ResponseEntity<ResponseType<?>> handleCustomException(CustomException ex) {
        // Créez une réponse avec le message d'erreur
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new ResponseType<>(ex.getMessage()));
    }
}