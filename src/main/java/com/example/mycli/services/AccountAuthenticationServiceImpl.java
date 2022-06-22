package com.example.mycli.services;

import com.example.mycli.exceptions.*;
import com.example.mycli.model.UserEntity;
import com.example.mycli.repository.UserEntityRepository;
import com.example.mycli.web.AuthResponse;
import com.example.mycli.web.JwtProvider;
import com.example.mycli.web.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RequiredArgsConstructor
@Service
public class AccountAuthenticationServiceImpl implements AccountAuthenticationService{

    private final UserEntityRepository userEntityRepository;
    private final UserService userService;
    private final JwtProvider jwtProvider;

    @Override
    public void authenticateAccount(String email, String password,
                                                      HttpServletResponse httpServletResponse) {
        if (userEntityRepository.findByEmail(email) == null) throw new AccountNotFound(email);
        UserEntity userEntity = userService.findByLoginAndPassword(email, password);
        if (userEntity != null) {
            String token = jwtProvider.generateToken(email);
            Cookie cookie = new Cookie("token", token);
            cookie.setHttpOnly(true);
            httpServletResponse.addCookie(cookie);
            throw new AccountOK();
        } else {
            throw new AccountCheckLoginPassword();
        }
    }
}
