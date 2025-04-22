package ru.ryaboman.projects.ntsystem.backend.entity;

import java.util.List;

public class Notification {
    private String id;
    private String mark;
    private Device device;
    private List<Document> documentList;
    private long userId;
    private long fileId;
    private int countPages;
    private String comment;
    private String pathToFile;
}
