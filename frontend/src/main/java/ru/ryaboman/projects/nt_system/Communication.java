package ru.ryaboman.projects.nt_system;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import ru.ryaboman.projects.nt_system.dto.DTODocument;
import ru.ryaboman.projects.nt_system.model.Device;

import java.util.List;


@Component
@RequiredArgsConstructor
public class Communication {
    private final RestTemplate restTemplate;

    //Spring Boot File Upload Using Spring Boot Rest API -- https://springjava.com/spring-boot/upload-file-using-spring-boot-rest-api/

    private final String BASE_URL = "http://localhost:8080/api/v1";

    private final String BASE_URL_DOCUMENTS = BASE_URL + "/documents";

    public List<Device> getAllDevices(){
        ResponseEntity<List<Device>> response = restTemplate.exchange(BASE_URL+ "/devices",
                HttpMethod.GET, null, new ParameterizedTypeReference<List<Device>>() {});

        List<Device> devices = response.getBody();

        return devices;
    }

    public Device getDevice(Long id){
        Device device = restTemplate.getForObject(BASE_URL + "/devices/" + id,
                Device.class);

        return device;
    }

    public String addDocument(DTODocument document, MultipartFile multipartFile){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);


        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("file", multipartFile.getResource());
        body.add("document", document);

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(BASE_URL_DOCUMENTS, requestEntity, String.class);
        System.out.println(response.getBody());
        return response.getBody();
    }
}