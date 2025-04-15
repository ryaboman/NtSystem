package ru.ryaboman.projects.ntsystem.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DrawingController {
    @GetMapping("/drawing")
    public String getDrawingPage() {
        return "drawing";
    }
}
