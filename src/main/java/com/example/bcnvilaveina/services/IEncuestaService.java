package com.example.bcnvilaveina.services;

import com.example.bcnvilaveina.Model.Encuestas;

import java.util.List;

public interface IEncuestaRepository {

    Encuestas create(Encuestas encuestas);


    List<Encuestas> findByBarris(String barris);

    List<Encuestas> findAll();

    void delete(String id);

    Encuestas update(Encuestas encuestas);
}
