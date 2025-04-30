package ru.ryaboman.projects.ntsystem.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import ru.ryaboman.projects.ntsystem.backend.entity.Document;

@RestController
public class DocumentController {
    @GetMapping("/documents")
    public String getDrawingPage() {
        return "drawing";
    }

    @PostMapping("documents")
    public void addDocument(@RequestParam("document") Document document) {

    }
}
