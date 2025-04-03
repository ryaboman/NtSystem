package ru.ryaboman.projects.nt_system.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/devices")
public class DeviceController {
    @GetMapping
    public String getDevices(@RequestParam(value = "q", required = true) String q) {
        return "devices" + q;
    }
}
