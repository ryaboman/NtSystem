package ru.ryaboman.projects.ntsystem.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.ryaboman.projects.ntsystem.backend.dto.DTODocument;
import ru.ryaboman.projects.ntsystem.backend.entity.Device;
import ru.ryaboman.projects.ntsystem.backend.entity.Document;
import ru.ryaboman.projects.ntsystem.backend.mapper.DocumentMapper;
import ru.ryaboman.projects.ntsystem.backend.service.DeviceService;
import ru.ryaboman.projects.ntsystem.backend.service.DocumentService;
import ru.ryaboman.projects.ntsystem.backend.util.MinioUtil;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/documents")
public class DocumentController {

    private final DocumentService documentService;
    private final MinioUtil minioUtil;
    private final DocumentMapper documentMapper;

    @GetMapping
    public String getDrawingPage() {
        return "drawing";
    }

    @GetMapping("/{id}")
    public Document findByIdDocument(@PathVariable Long id) {
        //minioUtil.createBucketName("files");
        return documentService.findById(id);
    }

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public Document addDocument(@RequestPart("document") DTODocument dtoDocument, @RequestPart("file") MultipartFile file) {
        if (file.isEmpty()) {
            return null;
        }

        String fileName = dtoDocument.getMark() + "/" + file.getOriginalFilename();
        String checkExistFileName = minioUtil.getPreviewFileUrl("files", fileName);
        if(minioUtil.bucketExists("files") && checkExistFileName.isBlank()){
            minioUtil.minioUpload(file, fileName, "files");
        }

        Document document = documentMapper.fromDto(dtoDocument);
        //document.setFile;
        documentService.save(document);

        return document;
    }
}
