package ru.ryaboman.projects.nt_system.service;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.ryaboman.projects.nt_system.dao.DAODevice;
import ru.ryaboman.projects.nt_system.entity.Device;

import java.util.List;
import java.util.Optional;

@Service
public interface DeviceService {
    List<Device> findByNameContaining(String deviceName);
    Device save(Device device);
    List<Device> findAll();
}
