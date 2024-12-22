package com.employee.backend.utils.dto.request;

import com.employee.backend.utils.validation.fullname.UniqueFullName;
import com.employee.backend.utils.validation.password.ValidPassword;
import com.employee.backend.utils.validation.username.UniqueUsername;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequestDTO {

    @Email(message = "The username is an email")
    @NotNull(message = "The username is missing")
    @NotBlank(message = "The username is missing")
    @UniqueUsername
    private String username;

    @ValidPassword
    @NotNull(message = "The password is missing")
    @NotBlank(message = "The password is missing")
    private String password;

}