package ru.ryaboman.projects.nt_system.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Device {
    long id;

    String name;

    String mark;

    List<Document> documentList;

    //Map<String, Device> deviceComposition;
}

