package com.example.mycli.controllers;

import com.example.mycli.services.ScreeningFormService;
import com.example.mycli.model.ScreeningRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/screening")
@CrossOrigin(origins = "http://localhost:8080")
public class ScreeningFormController {
    private final ScreeningFormService screeningFormService;
    @PostMapping()
    public void screeningForm(@RequestBody @Valid ScreeningRequest screeningRequest) {
        screeningFormService.fillScreeningForm(screeningRequest);
    }

}
