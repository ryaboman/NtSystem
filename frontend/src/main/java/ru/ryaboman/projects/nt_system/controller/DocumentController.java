package ru.ryaboman.projects.nt_system.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import ru.ryaboman.projects.nt_system.Communication;
import ru.ryaboman.projects.nt_system.dto.DTODocument;
import ru.ryaboman.projects.nt_system.model.Document;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/documents")
public class DocumentController {
    private final Communication communication;

    // Save the uploaded file to this folder
    private static String UPLOADED_FOLDER =
            "/home/user/Desktop/files/";

    @PostMapping
    public String addDocument(@RequestParam("file") MultipartFile file, @ModelAttribute(name = "document") DTODocument document, Model model) {

        String response = communication.addDocument(document, file);
        model.addAttribute("response", response);

        return "devices";
    }
}
