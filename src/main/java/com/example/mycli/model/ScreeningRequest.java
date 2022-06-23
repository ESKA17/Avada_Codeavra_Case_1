package com.example.mycli.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ScreeningRequest {
    private Long id;
    private String name;
    private String surname;
    private String fatherName;
    private String email;
    private Integer age;
    private int studyDegree;
}
