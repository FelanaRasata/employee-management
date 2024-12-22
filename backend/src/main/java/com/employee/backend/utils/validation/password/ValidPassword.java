package com.employee.backend.utils.validation.password;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = PasswordValidator.class)
public @interface ValidPassword {
    String message() default "Invalid password: \nPassword must be 8-20 characters long, \ninclude at least one digit, \none lowercase letter, \none uppercase letter, \none special character, \nand have no spaces.";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}