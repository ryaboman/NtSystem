package ru.ryaboman.projects.nt_system.service;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;
import ru.ryaboman.projects.nt_system.dao.DAODevice;
import ru.ryaboman.projects.nt_system.entity.Device;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
@Transactional
public class DeviceServiceImpl implements DeviceService {
    private final DAODevice daoDevice;

    @Override
    public List<Device> findByNameContaining(String deviceName){
        return daoDevice.findByNameContainingIgnoreCase(deviceName);
    }

    @Override
    public Device save(Device device) {
        return daoDevice.save(device);
    }

    @Override
    public List<Device> findAll() {
        return daoDevice.findAll();
    }
}
