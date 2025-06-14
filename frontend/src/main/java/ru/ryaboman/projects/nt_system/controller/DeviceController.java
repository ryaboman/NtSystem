package ru.ryaboman.projects.nt_system.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.ryaboman.projects.nt_system.Communication;
import ru.ryaboman.projects.nt_system.model.Device;

import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/devices")
public class DeviceController {
    //private final DeviceService deviceService;
    private final Communication communication;

    @GetMapping
    public String getAllDevices(Model model) {
        List<Device> devices = communication.getAllDevices();
        model.addAttribute("devices", devices);
        return "devices";
    }

    @GetMapping("/{id}")
    public String getAllDevices(@PathVariable Long id, Model model) {
        Device device = communication.getDevice(id);
        model.addAttribute("device", device);
        return "device";
    }

}
