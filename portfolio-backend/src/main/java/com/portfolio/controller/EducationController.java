package com.portfolio.controller;

import com.portfolio.model.Education;
import com.portfolio.service.EducationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/educations")
@CrossOrigin(origins = "http://localhost:4200")
public class EducationController {

    private final EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    @GetMapping
    public ResponseEntity<List<Education>> getAllEducations() {
        return ResponseEntity.ok(educationService.getAllEducations());
    }

    @PostMapping
    public ResponseEntity<Education> createEducation(@RequestBody Education education) {
        return ResponseEntity.ok(educationService.createEducation(education));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEducation(@PathVariable Long id) {
        educationService.deleteEducation(id);
        return ResponseEntity.noContent().build();
    }
}