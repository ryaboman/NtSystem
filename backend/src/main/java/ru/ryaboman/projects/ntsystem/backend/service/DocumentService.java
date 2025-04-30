package ru.ryaboman.projects.ntsystem.backend.service;

import org.springframework.stereotype.Service;
import ru.ryaboman.projects.ntsystem.backend.entity.Document;

import java.util.Optional;

@Service
public interface DocumentService {
    Document findById(Long id);
    Document findByMark(String mark);
    Document save(Document document);
}
