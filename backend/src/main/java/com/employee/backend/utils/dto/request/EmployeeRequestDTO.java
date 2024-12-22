package com.employee.backend.utils.dto.request;

import com.employee.backend.utils.validation.fullname.UniqueFullName;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class EmployeeRequestDTO {

    @UniqueFullName(message = "This full name is already used.")
    @NotNull(message = "The full name is missing")
    @NotBlank(message = "The full name is missing")
    private String fullName;

    @NotNull(message = "The birth of date is missing")
    private LocalDate dateOfBirth;

}
