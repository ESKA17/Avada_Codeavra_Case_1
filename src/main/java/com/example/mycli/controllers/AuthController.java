package com.example.mycli.controllers;

import com.example.mycli.model.UserEntity;
import com.example.mycli.repository.UserEntityRepository;
import com.example.mycli.services.AccountAuthenticationService;
import com.example.mycli.services.AccountRegistrationService;
import com.example.mycli.model.AuthRequest;
import com.example.mycli.model.RegRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:8080")
public class AuthController {
    private final UserEntityRepository userEntityRepository;
    private final AccountRegistrationService accountRegistrationService;
    private final AccountAuthenticationService accountAuthenticationService;

    @PostMapping("/register")
    public void registerUser(@RequestBody @Valid RegRequest registrationRequest) {
        String email = registrationRequest.getEmail();
        String password  = registrationRequest.getPassword();
        accountRegistrationService.registerAccount(email, password);
    }

    @PostMapping("/auth")
    public void auth(@RequestBody @Valid AuthRequest authRequest,
                                       HttpServletResponse httpServletResponse) {
        String email = authRequest.getEmail();
        String password = authRequest.getPassword();
        accountAuthenticationService.authenticateAccount(email, password, httpServletResponse);
    }
    @GetMapping("/users")
    public List<UserEntity> users() {
        return userEntityRepository.findAll();
    }

    @PostMapping("/logout")
    public void logout() {}

}

