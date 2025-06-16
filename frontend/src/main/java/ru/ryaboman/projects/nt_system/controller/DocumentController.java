package ru.ryaboman.projects.nt_system.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import ru.ryaboman.projects.nt_system.dto.DTODocument;
import ru.ryaboman.projects.nt_system.model.Document;
import ru.ryaboman.projects.nt_system.service.DocumentService;


@AllArgsConstructor
@Controller
@RequestMapping("/documents")
public class DocumentController {
    private final DocumentService documentService;

    @PostMapping
    public ResponseEntity<Document> addDocument(@RequestParam("file") MultipartFile file, @ModelAttribute(name = "document") DTODocument dtoDocument, Model model) {

        Document document = documentService.save(dtoDocument, file);
        model.addAttribute("response", document);

        return new ResponseEntity<>(document, HttpStatus.CREATED);
    }
}
