package com.employee.backend.utils.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Classe de requête pour la connexion
 *
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SignInRequestDTO {

    @NotNull(message = "The username is missing")
    @NotBlank(message = "The username is missing")
    private String username;

    @NotNull(message = "The password is missing")
    @NotBlank(message = "The password is missing")
    private String password;


}