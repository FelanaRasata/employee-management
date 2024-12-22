package com.employee.backend.controllers;


import com.employee.backend.entities.User;
import com.employee.backend.services.UserService;
import com.employee.backend.services.security.JwtService;
import com.employee.backend.utils.dto.request.SignInRequestDTO;
import com.employee.backend.utils.dto.JwtResponseDTO;
import com.employee.backend.utils.dto.ResponseType;
import com.employee.backend.utils.dto.request.SignUpRequestDTO;
import com.employee.backend.utils.enumeration.EMessage;
import com.employee.backend.utils.enumeration.ETable;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@CrossOrigin("*")
public class AuthController {


    private final JwtService jwtService;

    private final UserService userService;


    public AuthController(JwtService jwtService, UserService userService) {
        this.jwtService = jwtService;

        this.userService = userService;
    }


    @PostMapping("/sign-in")
    public ResponseEntity<?> signIn(@RequestBody @Valid SignInRequestDTO authRequest) {

        try {

            User authenticatedUser = userService.authenticate(authRequest);

            JwtResponseDTO jwtResponseDTO = new JwtResponseDTO();
            jwtResponseDTO.setUsername(authRequest.getUsername());
            jwtResponseDTO.setToken(jwtService.GenerateToken(authenticatedUser));

            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ResponseType<>(EMessage.SUCCESS.toString(), jwtResponseDTO));


        } catch (BadCredentialsException e) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseType<>(e.getMessage()));

        }

    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(@Valid @RequestBody SignUpRequestDTO signUpRequest) {

        try {

            User savedUser = userService.signUp(signUpRequest);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(new ResponseType<>(EMessage.SUCCESS_CREATED.byEntity(ETable.USER), savedUser));

        } catch (ConstraintViolationException e) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseType<>(EMessage.USERNAME_USED.toString()));

        }

    }

    @GetMapping("current")
    public ResponseEntity<?> getUserCurrent() {

        User user = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal());

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseType<>(EMessage.SUCCESS.toString(), user));

    }

    @GetMapping("test")
    public String test() {

        return "test";

    }


}