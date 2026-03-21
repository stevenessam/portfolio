package com.portfolio.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "experiences")
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String organization;
    private String location;
    private String startDate;
    private String endDate;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String tags;
}