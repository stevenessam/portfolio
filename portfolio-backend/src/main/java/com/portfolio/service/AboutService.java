package com.portfolio.service;

import com.portfolio.model.About;
import com.portfolio.repository.AboutRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AboutService {

    private final AboutRepository aboutRepository;

    public AboutService(AboutRepository aboutRepository) {
        this.aboutRepository = aboutRepository;
    }

    public List<About> getAbout() {
        return aboutRepository.findAll();
    }

    public About createAbout(About about) {
        return aboutRepository.save(about);
    }

    public About updateAbout(Long id, About about) {
        about.setId(id);
        return aboutRepository.save(about);
    }
}