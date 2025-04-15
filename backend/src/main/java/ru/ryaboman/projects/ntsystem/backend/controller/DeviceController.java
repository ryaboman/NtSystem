package ru.ryaboman.projects.ntsystem.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.ryaboman.projects.ntsystem.backend.entity.Device;
import ru.ryaboman.projects.ntsystem.backend.service.DeviceService;

import java.util.List;

@RequiredArgsConstructor
@RestController()
@RequestMapping("/api/v1")
public class DeviceController {
    private final DeviceService deviceService;

    @GetMapping("/devices")
    public List<Device> findAllDevices() {
        return deviceService.findAll();
    }

    @GetMapping("/devices/{id}")
    public Device findByIdDevices(@PathVariable Long id) {
        return deviceService.findById(id);
    }

    @GetMapping("/devices/name/{name}")
    public List<Device> findByNameDevices(@PathVariable String name) {
        return deviceService.findByNameContaining(name);
    }

    @PostMapping("/devices")
    public Device addDevice(@ModelAttribute(name = "device") Device device) {
        deviceService.save(device);
        return device;
    }

}
