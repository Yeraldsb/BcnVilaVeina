package com.example.bcnvilaveina.services;

import com.example.bcnvilaveina.Model.Encuestas;

import com.example.bcnvilaveina.Repository.EncuestasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EncuestasService implements IEncuestaService {

    @Autowired
    private EncuestasRepository encuestasRepository;

    @Override
    public Encuestas create(Encuestas encuestas) {
        return encuestasRepository.save(encuestas);
    }


    @Override
    public List<Encuestas> findAll() {
        return encuestasRepository.findAll();
    }

    @Override
    public void delete(String id) {
        encuestasRepository.deleteById(id);

    }

    @Override
    public Encuestas update(Encuestas encuestas) {
        return encuestasRepository.save(encuestas);
    }
}


