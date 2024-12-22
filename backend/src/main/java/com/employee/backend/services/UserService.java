package com.employee.backend.services;


import com.employee.backend.entities.User;
import com.employee.backend.repositories.UserRepository;
import com.employee.backend.utils.dto.request.SignInRequestDTO;
import com.employee.backend.utils.dto.request.SignUpRequestDTO;
import com.employee.backend.utils.enumeration.EMessage;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * Service qui gére les authentifications.
 *
 */
@Component
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;


    public UserService(
            PasswordEncoder passwordEncoder,
            UserRepository userRepository,
            AuthenticationManager authenticationManager
    ) {

        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.authenticationManager = authenticationManager;

    }

    public User signUp(SignUpRequestDTO signUpRequest) {

        User user = new User();
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        return userRepository.save(user);

    }

    public User authenticate(SignInRequestDTO authRequest) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getUsername(),
                        authRequest.getPassword()
                )
        );

        return userRepository.findByUsername(authRequest.getUsername())
                .orElseThrow(() -> new BadCredentialsException(EMessage.BAD_CREDENTIAL.toString()));

    }


}