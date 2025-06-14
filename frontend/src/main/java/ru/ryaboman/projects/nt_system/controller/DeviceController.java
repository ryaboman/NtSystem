package ru.ryaboman.projects.nt_system.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.ryaboman.projects.nt_system.Communication;
import ru.ryaboman.projects.nt_system.model.Device;
import ru.ryaboman.projects.nt_system.model.Document;

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
        Document document = new Document();
        document.setDevice(device);
        document.setTitle(device.getName());
        model.addAttribute("device", device);
        model.addAttribute("document", document);
        return "device";
    }

    @GetMapping("/add")
    public String showPageAddDevice(Model model) {
        Device device = new Device();
        model.addAttribute("device", device);
        return "addDevice";
    }

    @PostMapping
    public String addDevice(@ModelAttribute(name = "device") Device device) {

        return "devices";
    }

}
