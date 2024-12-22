package com.employee.backend.utils.validation.username;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Constraint(validatedBy = UsernameValidator.class)
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface UniqueUsername {
    String message() default "This username has an account."; // Message personnalisable

    Class<?>[] groups() default {}; // Groupes de validation (optionnels)

    Class<? extends Payload>[] payload() default {};
}
