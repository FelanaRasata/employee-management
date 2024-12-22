package com.employee.backend.utils.validation.fullname;

import com.employee.backend.repositories.EmployeeRepository;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

public class FullNameValidator implements ConstraintValidator<UniqueFullName, String> {

    @Autowired
    private EmployeeRepository repository;


    @Override
    public boolean isValid(String name, ConstraintValidatorContext context) {

        if (name == null || name.trim().isEmpty()) {
            return true;
        }

        return !repository.existsByFullName(name);
    }
}
