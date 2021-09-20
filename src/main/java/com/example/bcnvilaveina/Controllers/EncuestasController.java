package com.example.bcnvilaveina.Controllers;

import com.example.bcnvilaveina.Model.Encuestas;
import com.example.bcnvilaveina.Repository.EncuestasRepository;
import com.example.bcnvilaveina.services.EncuestasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class EncuestasController {

    private EncuestasService encuestasService;

    @Autowired
  private EncuestasRepository encuestasRepository;

    @GetMapping("/all")
    private List<Encuestas> encuestasList(){
        return encuestasRepository.findAll();
    }

    @PostMapping("/createencuesta")
    private void crearEncuesta(@RequestBody Encuestas encuestas){
        encuestasRepository.insert(encuestas);
    }

    @DeleteMapping("/eliminarEncuesta/{id}")
    private void eliminarEcuesta(@PathVariable String id){
        encuestasRepository.deleteById(id);
    }




}
