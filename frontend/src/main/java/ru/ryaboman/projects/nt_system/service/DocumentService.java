package ru.ryaboman.projects.nt_system.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import ru.ryaboman.projects.nt_system.dto.DTODocument;
import ru.ryaboman.projects.nt_system.model.Document;

@Service
public interface DocumentService {
    Document findById(Long id);
    Document save(DTODocument document, MultipartFile multipartFile);
}
