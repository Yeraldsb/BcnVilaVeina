package com.example.bcnvilaveina.services;
import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Repository.EncuestadoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EncuestadoresService {

    private EncuestadoresRepository encuestadoresRepository;

    @Autowired
    public EncuestadoresService(EncuestadoresRepository encuestadoresRepository) {
        this.encuestadoresRepository = encuestadoresRepository;
    }

    public List<Encuestadores> allEncuestadores() {
        return (List<Encuestadores>) encuestadoresRepository.findAll();
    }

    public Encuestadores findById(String id) {
        return encuestadoresRepository.findById(id).orElse(null);
    }

    public Encuestadores update(Encuestadores encuestadores){
        return encuestadoresRepository.save(encuestadores);
    }

}


