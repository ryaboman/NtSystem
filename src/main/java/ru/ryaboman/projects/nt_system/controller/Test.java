package ru.ryaboman.projects.nt_system.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.ryaboman.projects.nt_system.service.DeviceService;

@AllArgsConstructor
@Controller
public class Test {
    private final DeviceService deviceService;

    @GetMapping("/devices")
    public String getDevices(Model model) {
        model.addAttribute("devices", deviceService.findAll());
        return "devices";
    }
}
