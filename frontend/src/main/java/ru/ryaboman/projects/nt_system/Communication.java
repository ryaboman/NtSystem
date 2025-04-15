package ru.ryaboman.projects.nt_system;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;


@Component
@RequiredArgsConstructor
public class Communication {
    private final RestTemplate restTemplate;

    private final String baseUrl = "http://localhost:8080/api/v1";

    public void sendMessage(String message) {
        restTemplate.exchange(baseUrl, HttpMethod.GET, null
                , new ParameterizedTypeReference<String>() {});
    }
}