package ru.ryaboman.projects.nt_system.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import ru.ryaboman.projects.nt_system.model.Device;
import ru.ryaboman.projects.nt_system.model.Document;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DeviceServiceImpl implements DeviceService {

    @Value("${BASE_URL}")
    private String BASE_URL;

    private final String URL_DEVICES = "/devices";

    private final RestTemplate restTemplate;


    @Override
    public List<Device> findByNameContaining(String deviceName) {
        return List.of();
    }

    @Override
    public Device save(Device device) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);


        HttpEntity<Device> requestEntity = new HttpEntity<>(device, headers);

        ResponseEntity<Device> response = restTemplate.postForEntity(BASE_URL + URL_DEVICES, requestEntity, Device.class);
        System.out.println(response.getBody());

        return response.getBody();
    }

    @Override
    public List<Device> findAll() {
        ResponseEntity<List<Device>> response = restTemplate.exchange(BASE_URL + URL_DEVICES,
                HttpMethod.GET, null, new ParameterizedTypeReference<>() {});

        return response.getBody();
    }

    @Override
    public Device findById(Long id) {
        Device device = restTemplate.getForObject(BASE_URL + URL_DEVICES + "/" + id,
                Device.class);

        return device;
    }
}
