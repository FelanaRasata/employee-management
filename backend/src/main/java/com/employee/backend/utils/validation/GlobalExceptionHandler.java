package com.employee.backend.utils.validation;

import com.employee.backend.utils.dto.ResponseType;
import com.employee.backend.utils.enumeration.EMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseType<?>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        FieldError firstError = (FieldError) ex.getBindingResult().getAllErrors().get(0);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new ResponseType<>(firstError.getDefaultMessage()));
    }
}