package ru.ryaboman.projects.ntsystem.backend.service;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.ryaboman.projects.ntsystem.backend.dao.DAODocument;
import ru.ryaboman.projects.ntsystem.backend.entity.Document;

import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class DocumentServiceImpl implements DocumentService {
    private final DAODocument daoDocument;

    @Override
    public Document findById(Long id){
        Optional<Document> optionalDocument =  daoDocument.findById(id);
        return optionalDocument.orElse(null);
    }

    @Override
    public Document findByMark(String mark){
        Optional<Document> optionalDocument =  daoDocument.findByMark(mark);
        return optionalDocument.orElse(null);
    }

    @Override
    public Document save(Document document){
        return daoDocument.save(document);
    }
}
