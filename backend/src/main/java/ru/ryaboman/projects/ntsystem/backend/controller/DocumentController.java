package ru.ryaboman.projects.ntsystem.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.ryaboman.projects.ntsystem.backend.entity.Device;
import ru.ryaboman.projects.ntsystem.backend.entity.Document;
import ru.ryaboman.projects.ntsystem.backend.service.DocumentService;
import ru.ryaboman.projects.ntsystem.backend.util.MinioUtil;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/documents")
public class DocumentController {

    private final DocumentService documentService;
    private final MinioUtil minioUtil;

    @GetMapping
    public String getDrawingPage() {
        return "drawing";
    }

    @GetMapping("/{id}")
    public Document findByIdDocument(@PathVariable Long id) {
        //minioUtil.createBucketName("files");
        return documentService.findById(id);
    }

    @PostMapping
    public void addDocument(@RequestParam("document") Document document) {

    }
}
