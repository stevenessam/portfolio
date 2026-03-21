package com.portfolio.service;

import com.portfolio.model.Experience;
import com.portfolio.repository.ExperienceRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    public ExperienceService(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    public List<Experience> getAllExperiences() {
        return experienceRepository.findAll();
    }

    public Experience createExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    public void deleteExperience(Long id) {
        experienceRepository.deleteById(id);
    }
}