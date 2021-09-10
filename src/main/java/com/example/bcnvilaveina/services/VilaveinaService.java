package com.example.bcnvilaveina.services;

import com.example.bcnvilaveina.Model.Vilaveina;
import com.example.bcnvilaveina.Repository.VilaveinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VilaveinaService {

    private VilaveinaRepository vilaveinaRepository;

    @Autowired
    public VilaveinaService(VilaveinaRepository vilaveinaRepository) {
        this.vilaveinaRepository = vilaveinaRepository;
    }
    public List<Vilaveina> allVilaveina() {
        return (List<Vilaveina>) vilaveinaRepository.findAll();
    }

    public Vilaveina getVilaveina(String vilaveinaId) {
        return vilaveinaRepository.findById(vilaveinaId).get();
    }

}
