package ru.ryaboman.projects.nt_system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DrawingController {
    @GetMapping("/drawing")
    public String getDrawingPage() {
        return "drawing";
    }
}
