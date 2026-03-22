package com.portfolio.controller;

import com.portfolio.model.About;
import com.portfolio.service.AboutService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/about")
@CrossOrigin(origins = "http://localhost:4200")
public class AboutController {

    private final AboutService aboutService;

    public AboutController(AboutService aboutService) {
        this.aboutService = aboutService;
    }

    @GetMapping
    public ResponseEntity<List<About>> getAbout() {
        return ResponseEntity.ok(aboutService.getAbout());
    }

    @PostMapping
    public ResponseEntity<About> createAbout(@RequestBody About about) {
        return ResponseEntity.ok(aboutService.createAbout(about));
    }

    @PutMapping("/{id}")
    public ResponseEntity<About> updateAbout(@PathVariable Long id, @RequestBody About about) {
        return ResponseEntity.ok(aboutService.updateAbout(id, about));
    }
}