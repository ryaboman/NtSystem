package ru.ryaboman.projects.nt_system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.ryaboman.projects.nt_system.entity.Device;

@Controller
public class NotificationController {
    @GetMapping("/notifications")
    public String getNotifications(Model model) {
        model.addAttribute("device", new Device());
        return "notifications";
    }
}
