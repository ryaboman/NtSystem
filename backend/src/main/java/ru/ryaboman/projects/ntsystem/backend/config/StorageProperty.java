package ru.ryaboman.projects.ntsystem.backend.config;

import io.minio.MinioClient;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "s3")
public class StorageProperty {
    private String url;
    private String accessKey;
    private String secretKey;
}
