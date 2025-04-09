package ru.ryaboman.projects.nt_system.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.ryaboman.projects.nt_system.entity.Device;
import ru.ryaboman.projects.nt_system.entity.Subject;

import java.util.List;
import java.util.Optional;

@Repository
public interface DAOSubject extends JpaRepository<Subject, Long> {
    Optional<Subject> findById(Long id);
    Device findByName(String name);
    List<Subject> findByNameContainingIgnoreCase(String name);
    Subject save(Subject subject);
    List<Subject> findAll();
}
