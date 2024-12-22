package com.employee.backend.utils.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Classe de réponse lors de la connexion.
 *
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponseDTO {
    private String username;
    private String token;

}