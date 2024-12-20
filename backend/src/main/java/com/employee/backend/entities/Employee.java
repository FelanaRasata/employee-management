package com.employee.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
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

    @Column(unique = true)
    @NotNull(message = "Ajoutez votre nom à votre employé")
    private String fullName;

    @NotNull(message = "Ajoutez votre nom à votre employé")
    private LocalDate dateOfBirth;
}
