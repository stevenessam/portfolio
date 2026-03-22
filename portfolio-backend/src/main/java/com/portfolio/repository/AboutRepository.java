package com.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.model.About;

@Repository
public interface AboutRepository extends JpaRepository<About, Long> {
    
}
