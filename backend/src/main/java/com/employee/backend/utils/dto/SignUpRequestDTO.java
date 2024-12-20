package com.employee.backend.utils.dto;

import com.employee.backend.utils.validation.ValidPassword;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequestDTO {

    @Email
    private String username;

    @ValidPassword
    private String password;

    private String confirmPassword;

}