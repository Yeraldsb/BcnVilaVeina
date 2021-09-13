package com.example.bcnvilaveina.services;

import com.example.bcnvilaveina.Model.Encuestas;
import com.example.bcnvilaveina.Repository.EncuestasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EncuestasService {
    private final EncuestasRepository encuestasRepository;

    @Autowired
    public EncuestasService(EncuestasRepository encuestasRepository) {
        this.encuestasRepository = encuestasRepository;
    }

    public List<Encuestas> allEncuestas() {
        return (List<Encuestas>) encuestasRepository.findAll();
    }

    public Encuestas findById(String id) {
        return encuestasRepository.findById(id).orElse(null);
    }

}


