package com.employee.backend.utils.validation.username;

import com.employee.backend.repositories.EmployeeRepository;
import com.employee.backend.repositories.UserRepository;
import com.employee.backend.utils.validation.fullname.UniqueFullName;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;



public class UsernameValidator implements ConstraintValidator<UniqueUsername, String> {

    @Autowired
    private UserRepository repository;


    @Override
    public boolean isValid(String name, ConstraintValidatorContext context) {

        if (name == null || name.trim().isEmpty()) {
            return true;
        }

        return !repository.existsByUsername(name);
    }
}