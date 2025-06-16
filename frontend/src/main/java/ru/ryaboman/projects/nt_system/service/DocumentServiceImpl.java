package ru.ryaboman.projects.nt_system.service;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import ru.ryaboman.projects.nt_system.dto.DTODocument;
import ru.ryaboman.projects.nt_system.model.Device;
import ru.ryaboman.projects.nt_system.model.Document;

@Service
@RequiredArgsConstructor
public class DocumentServiceImpl implements DocumentService {

    @Value("${BASE_URL}")
    private String BASE_URL;

    private final String URL_DOCUMENTS = "/documents";

    private final RestTemplate restTemplate;

    @Override
    public Document findById(Long id) {
        Document document = restTemplate.getForObject(BASE_URL + URL_DOCUMENTS + "/" + id,
                Document.class);

        return document;
    }

    @Override
    public Document save(DTODocument document, MultipartFile multipartFile) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);


        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("file", multipartFile.getResource());
        body.add("document", document);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<Document> response = restTemplate.postForEntity(BASE_URL + URL_DOCUMENTS, requestEntity, Document.class);
        System.out.println(response.getBody());

        return response.getBody();
    }
}
