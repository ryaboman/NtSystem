package ru.ryaboman.projects.ntsystem.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.ryaboman.projects.ntsystem.backend.entity.Document;

import java.util.Optional;

@Repository
public interface DAODocument extends JpaRepository<Document, Long> {
    Optional<Document> findById(Long id);
    Optional<Document> findByMark(String mark);
    Document save(Document document);
}
