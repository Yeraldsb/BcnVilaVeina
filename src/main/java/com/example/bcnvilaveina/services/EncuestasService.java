package com.example.bcnvilaveina.services;

import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Model.Encuestas;
import com.example.bcnvilaveina.Repository.EncuestasRepository;

import java.util.List;

public class EncuestasService {

    private final EncuestasRepository encuestasRepository;

    public EncuestasService(EncuestasRepository encuestasRepository){
        this.encuestasRepository = encuestasRepository;
    }

    public List<Encuestas> allEncuestas(){
        return (List<Encuestas>) encuestasRepository.findAll();
    }

    public Encuestas finById(String id){
        return encuestasRepository.findById(id).orElse(null);
    }
    public Encuestas update(Encuestas encuestas){
        return encuestasRepository.save(encuestas);
    }

}
