package ru.ryaboman.projects.ntsystem.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.ryaboman.projects.ntsystem.backend.entity.Subject;
import ru.ryaboman.projects.ntsystem.backend.service.SubjectService;

import java.util.List;

@RestController
@AllArgsConstructor
public class SubjectController {
    private final SubjectService subjectService;

    @GetMapping("/subjects")
    public List<Subject> findDevices() {
        return subjectService.findAll();
    }

    @PostMapping("/subjects")
    public Boolean addDevice(@ModelAttribute(name = "device") Subject subject) {
        subjectService.save(subject);
        return true;
    }
}
