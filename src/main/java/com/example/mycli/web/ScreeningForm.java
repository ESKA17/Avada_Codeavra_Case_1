package com.example.mycli.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/screening")
public class ScreeningForm {

    @PostMapping()
    public void registerUser(@RequestBody @Valid RegRequest registrationRequest) {
        String login = registrationRequest.getEmail();
    }

}
