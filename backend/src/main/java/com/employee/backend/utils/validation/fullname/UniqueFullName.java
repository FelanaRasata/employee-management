package com.employee.backend.utils.validation.fullname;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Constraint(validatedBy = FullNameValidator.class)
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface UniqueFullName {

    String message() default "Cette valeur doit être unique.";

    Class<?>[] groups() default {}; // Groupes de validation (optionnels)

    Class<? extends Payload>[] payload() default {};

}
