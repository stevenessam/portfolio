package com.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.portfolio.model.Project;
import com.portfolio.repository.ProjectRepository;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository){
        this.projectRepository = projectRepository;
    }
    

    public List<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    public Project createProject(Project project){
        return projectRepository.save(project);
    }

      public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
