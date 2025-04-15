package ru.ryaboman.projects.ntsystem.backend.service;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.ryaboman.projects.ntsystem.backend.dao.DAODevice;
import ru.ryaboman.projects.ntsystem.backend.entity.Device;

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

    @Override
    public Device findById(Long id) {
        Optional<Device> optionalDevice = daoDevice.findById(id);
        return optionalDevice.orElse(null);
    }
}
