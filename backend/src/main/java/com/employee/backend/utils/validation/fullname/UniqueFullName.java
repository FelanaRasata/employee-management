package com.employee.backend.utils.validation.fullname;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

/**
 * Interface d'annotation qui verifie que le Full Name d'un employé est unique
 *
 */
@Constraint(validatedBy = FullNameValidator.class)
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface UniqueFullName {

    String message() default "This full name is already used.";

    Class<?>[] groups() default {}; // Groupes de validation (optionnels)

    Class<? extends Payload>[] payload() default {};

}
