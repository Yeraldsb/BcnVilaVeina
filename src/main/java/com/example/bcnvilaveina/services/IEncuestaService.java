package com.example.bcnvilaveina.services;

import com.example.bcnvilaveina.Model.Encuestas;

import java.util.List;

public interface IEncuestaService {

    Encuestas create(Encuestas encuestas);

    List<Encuestas> findAll();

    void delete(String id);

    Encuestas update(Encuestas encuestas);
}
