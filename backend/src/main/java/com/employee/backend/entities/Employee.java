package com.employee.backend.entities;

import com.employee.backend.utils.validation.fullname.UniqueFullName;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "employees")
public class Employee extends BaseEntity {

    @NotNull(message = "The full name is missing")
    @NotBlank(message = "The full name is missing")
    @Column(unique = true)
    private String fullName;

    @NotNull(message = "The birth of date is missing")
    private LocalDate dateOfBirth;
}
