package com.example.bcnvilaveina.Controllers;

import com.example.bcnvilaveina.Model.Encuestas;
import com.example.bcnvilaveina.Repository.EncuestadoresRepository;
import com.example.bcnvilaveina.Repository.EncuestasRepository;
import com.example.bcnvilaveina.services.EncuestasService;
import com.example.bcnvilaveina.services.IEncuestaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
public class EncuestasController {

    private EncuestasRepository encuestasRepository;
    @Autowired
    private IEncuestaService encuestaService;


    @GetMapping("/all")
    private List<Encuestas> getAllEncuestas(){
        return encuestaService.findAll();
    }

<<<<<<< HEAD
    @PostMapping("/createencuesta")
    private Encuestas create(@RequestBody Encuestas encuestas){
        return encuestaService.create(encuestas);
=======
    @PostMapping("/encuestas")
    private void crearEncuesta
            (@RequestBody Encuestas encuestas){
        encuestasRepository.insert(encuestas);
>>>>>>> 7440db8afcdcdca54e1403abe80eeefc95fe038a
    }

    @PostMapping("/updateencuesta")
    private Encuestas update(@RequestBody Encuestas encuestas){
        return encuestaService.update(encuestas);
    }

    @DeleteMapping("/deletencuesta/{id}")
    @ResponseStatus(HttpStatus.OK)
    private void deleteById(@PathVariable String id){
        encuestaService.delete(id);
    }

}
