package ru.ryaboman.projects.ntsystem.backend.controller;

import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.errors.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.*;
import ru.ryaboman.projects.ntsystem.backend.config.MinioClientConfig;
import ru.ryaboman.projects.ntsystem.backend.entity.Device;
import ru.ryaboman.projects.ntsystem.backend.service.DeviceService;
import ru.ryaboman.projects.ntsystem.backend.util.MinioUtil;
import java.util.List;

@RequiredArgsConstructor
@RestController()
@RequestMapping("/api/v1/devices")
public class DeviceController {
    private final DeviceService deviceService;
    private final MinioUtil minioUtil;

    @GetMapping
    public List<Device> findAllDevices() {
        return deviceService.findAll();
    }

    @GetMapping("/{id}")
    public Device findByIdDevices(@PathVariable Long id) {
        minioUtil.createBucketName("files");
        return deviceService.findById(id);
    }

    @GetMapping("/name/{name}")
    public List<Device> findByNameDevices(@PathVariable String name) {
        return deviceService.findByNameContaining(name);
    }

    @PostMapping
    public Device addDevice(@Valid @RequestBody Device device) {
        deviceService.save(device);
        return device;
    }
}
