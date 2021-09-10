package com.example.bcnvilaveina.Controllers;

import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Repository.EncuestadoresRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
public class EncuestadoresController {
    @Autowired
    private EncuestadoresRepository encuestadoresRepository;
    @PostMapping("/crear")
    private void crearEncuestador(@RequestBody Encuestadores encuestadores){
        encuestadoresRepository.insert(encuestadores);
    }

    @GetMapping("/lista")
     private List<Encuestadores> ListaEncuestadores(){
        return encuestadoresRepository.findAll();
     }

     @DeleteMapping("/eliminar/{id}")
     private void eliminarEcuestadores(@PathVariable String id){
        encuestadoresRepository.deleteById(id);
     }


}
