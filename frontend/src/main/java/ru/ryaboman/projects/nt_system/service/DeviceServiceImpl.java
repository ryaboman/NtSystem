package ru.ryaboman.projects.nt_system.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import ru.ryaboman.projects.nt_system.model.Device;

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
        return null;
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
