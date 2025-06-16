package ru.ryaboman.projects.ntsystem.backend.mapper;

import org.springframework.stereotype.Component;
import ru.ryaboman.projects.ntsystem.backend.dto.DTODocument;
import ru.ryaboman.projects.ntsystem.backend.entity.Document;

@Component
public class DocumentMapper {
    public DTODocument toDto(Document document){
        DTODocument dtoDocument = new DTODocument();
        dtoDocument.setMark(document.getMark());
        dtoDocument.setTitle(document.getTitle());
        return dtoDocument;
    }

    public Document fromDto(DTODocument dtoDocument){
        Document document = new Document();
        document.setMark(dtoDocument.getMark());
        document.setTitle(dtoDocument.getTitle());
        return document;
    }
}
