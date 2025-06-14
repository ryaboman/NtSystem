package ru.ryaboman.projects.nt_system;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import ru.ryaboman.projects.nt_system.model.Device;
import ru.ryaboman.projects.nt_system.model.Document;

import java.util.List;


@Component
@RequiredArgsConstructor
public class Communication {
    private final RestTemplate restTemplate;

    //Spring Boot File Upload Using Spring Boot Rest API -- https://springjava.com/spring-boot/upload-file-using-spring-boot-rest-api/

    private final String BASE_URL = "http://localhost:8080/api/v1/devices";

    public List<Device> getAllDevices(){
        ResponseEntity<List<Device>> response = restTemplate.exchange(BASE_URL,
                HttpMethod.GET, null, new ParameterizedTypeReference<List<Device>>() {});

        List<Device> devices = response.getBody();

        return devices;
    }

    public Device getDevice(Long id){
        Device device = restTemplate.getForObject(BASE_URL + "/" + id,
                Device.class);

        return device;
    }
}