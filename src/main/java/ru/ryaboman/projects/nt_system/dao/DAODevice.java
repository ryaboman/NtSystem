package ru.ryaboman.projects.nt_system.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.ryaboman.projects.nt_system.entity.Device;

import java.util.List;
import java.util.Optional;

@Repository
public interface DAODevice extends JpaRepository<Device, Long> {
    Optional<Device>  findById(Long deviceId);
    Device findByName(String deviceName);
    List<Device> findByNameContainingIgnoreCase(String deviceName);
    Device save(Device device);
    List<Device> findAll();
}
