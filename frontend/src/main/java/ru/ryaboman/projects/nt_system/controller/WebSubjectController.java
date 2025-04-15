package ru.ryaboman.projects.nt_system.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.ryaboman.projects.nt_system.service.SubjectService;

@AllArgsConstructor
@Controller
public class WebSubjectController {
    private final SubjectService subjectService;

    @GetMapping("/subjects5")
    public String getSubjects(Model model) {
        model.addAttribute("subjects", subjectService.findAll());
        return "subjects";
    }
}
