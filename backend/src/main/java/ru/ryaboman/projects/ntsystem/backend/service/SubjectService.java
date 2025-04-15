package ru.ryaboman.projects.ntsystem.backend.service;

import org.springframework.stereotype.Service;
import ru.ryaboman.projects.ntsystem.backend.entity.Subject;

import java.util.List;

@Service
public interface SubjectService {
    List<Subject> findByNameContaining(String name);
    Subject save(Subject subject);
    List<Subject> findAll();
}
