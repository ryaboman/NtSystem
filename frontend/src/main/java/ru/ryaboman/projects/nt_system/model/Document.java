package ru.ryaboman.projects.nt_system.model;

import lombok.Data;

@Data
public class Document {
    private Long id;
    private String title;
    private String description;
    private String mark;

    private Device device;

    //private File
}