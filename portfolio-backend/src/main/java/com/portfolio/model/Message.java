package com.portfolio.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String subject;

    @Column(columnDefinition = "TEXT")
    private String message;

    private LocalDateTime sentAt;

    @PrePersist
    public void prePersist() {
        this.sentAt = LocalDateTime.now();
    }
}