package ru.ryaboman.projects.ntsystem.backend.config;

import io.minio.BucketExistsArgs;
import io.minio.MinioClient;
import io.minio.messages.Bucket;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.List;

@Configuration
@Component
@RequiredArgsConstructor
@Slf4j
public class MinioClientConfig {
    private final StorageProperty storageProperty;

    @Getter
    private static MinioClient minioClient;



    @SneakyThrows(Exception.class)
    public static boolean bucketExists(String bucketName) {
        return minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
    }

    @SneakyThrows(Exception.class)
    public static List<Bucket> getAllBuckets() {
        return minioClient.listBuckets();
    }


    @PostConstruct
    public void init() {
        try {
            minioClient = MinioClient.builder()
                    .endpoint(storageProperty.getUrl())
                    .credentials(storageProperty.getAccessKey(), storageProperty.getSecretKey())
                    .build();
        } catch (Exception e) {
            e.printStackTrace();
            log.error("Initiating Minio Configuration Anomalous: [{}}", e.fillInStackTrace());
        }
    }
}
