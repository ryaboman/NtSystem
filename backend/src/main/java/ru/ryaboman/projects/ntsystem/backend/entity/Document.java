package ru.ryaboman.projects.ntsystem.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "documents")
@Data
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String mark;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinTable(
            name = "documents_devices"
            , joinColumns = @JoinColumn(name = "id_document")
            , inverseJoinColumns = @JoinColumn(name = "id_device")
    )
    private Device device;

    //private File
}