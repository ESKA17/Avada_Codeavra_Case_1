package com.example.mycli.model;

import com.example.mycli.server.StudyDegree;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserInformation {
    private @Id Long id;
    private String name;
    private String surname;
    private String fatherName;
    private String email;
    private int age;
    @Enumerated(EnumType.STRING)
    private StudyDegree studyDegree;
}
