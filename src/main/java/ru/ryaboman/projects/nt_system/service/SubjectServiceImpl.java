package ru.ryaboman.projects.nt_system.service;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.ryaboman.projects.nt_system.dao.DAOSubject;
import ru.ryaboman.projects.nt_system.entity.Subject;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class SubjectServiceImpl implements SubjectService {
    private final DAOSubject daoSubject;

    @Override
    public List<Subject> findByNameContaining(String deviceName){
        return daoSubject.findByNameContainingIgnoreCase(deviceName);
    }

    @Override
    public Subject save(Subject subject) {
        return daoSubject.save(subject);
    }

    @Override
    public List<Subject> findAll() {
        return daoSubject.findAll();
    }
}
