package ru.ryaboman.projects.nt_system.controller;


import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.ryaboman.projects.nt_system.entity.Device;
import ru.ryaboman.projects.nt_system.service.DeviceService;

import java.util.List;

@AllArgsConstructor
@RestController
public class DeviceController {
    private final DeviceService deviceService;

    @RequestMapping("/devices")
    public List<Device> getDevices(@RequestParam(value = "q", required = true) String deviceName) {
        return deviceService.findByNameContaining(deviceName);
    }

    @PostMapping("/devices")
    public Boolean addDevice() {
        return true;
    }
}
