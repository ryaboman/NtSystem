package ru.ryaboman.projects.ntsystem.backend.controller;

import io.minio.MinioClient;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.ryaboman.projects.ntsystem.backend.util.MinioUtil;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class NotificationController {
    private final MinioUtil minioUtil;

    @RequestMapping("/downloadFile")
    public String downloadFile(@RequestParam String fileName, HttpServletResponse response) {
        var outputStream = minioUtil.downloadFile("files", fileName, response);
        if (outputStream == null) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return "download failed";
        }
        else {
            response.setStatus(HttpServletResponse.SC_OK);
            return "download success";
        }
    }

    @RequestMapping("/getReadFile")
    public String getPathToReadFile(@RequestParam String fileName) {

        String url = minioUtil.getPreviewFileUrl("files",fileName);
        return url;
    }

}
