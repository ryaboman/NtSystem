package ru.ryaboman.projects.ntsystem.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Entity
@Table(name = "devices")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @NotBlank(message = "Наименование изделия не должно быть пустым")
    String name;

    @NotBlank(message = "Обозначение изделия не должно быть пустым")
    String mark;

    //DeviceView deviceView;
    @OneToMany()
    @JoinTable(
            name = "documents_devices"
            , joinColumns = @JoinColumn(name = "id_device")
            , inverseJoinColumns = @JoinColumn(name = "id_document")
    )
    List<Document> documentList;

    //Map<String, Device> deviceComposition;
}

