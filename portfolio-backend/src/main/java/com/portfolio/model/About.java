package com.portfolio.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "about")
public class About {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String degree;
    private String focus;
    private String status;

    @Column(columnDefinition = "TEXT")
    private String bio1;

    @Column(columnDefinition = "TEXT")
    private String bio2;

    private String yearsExperience;
    private String projectsCompleted;
}