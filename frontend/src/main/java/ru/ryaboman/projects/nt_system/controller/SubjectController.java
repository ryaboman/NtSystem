package ru.ryaboman.projects.nt_system.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.ryaboman.projects.nt_system.entity.Subject;
import ru.ryaboman.projects.nt_system.service.SubjectService;

import java.util.List;

@RestController
@AllArgsConstructor
public class SubjectController {
    private final SubjectService subjectService;

    @RequestMapping("/subjects")
    public List<Subject> findDevices(@RequestParam(value = "q", required = true) String subjectName) {
        return subjectService.findByNameContaining(subjectName);
    }

    @PostMapping("/subjects")
    public Boolean addDevice(@ModelAttribute(name = "device") Subject subject) {
        subjectService.save(subject);
        return true;
    }
}
