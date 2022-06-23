package com.example.mycli.services;

import com.example.mycli.model.StudyDegree;
import com.example.mycli.model.UserInformation;
import com.example.mycli.repository.UserInformationRepository;
import com.example.mycli.model.ScreeningRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ScreeningFormServiceImpl implements ScreeningFormService{
    private final UserInformationRepository userInformationRepository;
    @Override
    public void fillScreeningForm(ScreeningRequest screeningRequest) {
        UserInformation userInformation = new UserInformation();
        userInformation.setName(screeningRequest.getName());
        userInformation.setSurname(screeningRequest.getSurname());
        userInformation.setEmail(screeningRequest.getEmail());
        userInformation.setAge(screeningRequest.getAge());
        userInformation.setFatherName(screeningRequest.getFatherName());
        if (screeningRequest.getStudyDegree() == 0) {
            userInformation.setStudyDegree(StudyDegree.NO_EDUCATION);
        } else if (screeningRequest.getStudyDegree() == 1) {
            userInformation.setStudyDegree(StudyDegree.MIDDLE_SCHOOL);
        } else {
            userInformation.setStudyDegree(StudyDegree.HIGHER);
        }
        userInformationRepository.save(userInformation);
    }
}
