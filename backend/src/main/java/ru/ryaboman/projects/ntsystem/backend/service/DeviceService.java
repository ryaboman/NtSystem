package ru.ryaboman.projects.ntsystem.backend.service;

import org.springframework.stereotype.Service;
import ru.ryaboman.projects.ntsystem.backend.entity.Device;

import java.util.List;

@Service
public interface DeviceService {
    List<Device> findByNameContaining(String deviceName);
    Device save(Device device);
    List<Device> findAll();
    Device findById(Long id);
}
