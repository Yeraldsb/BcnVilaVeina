package com.example.bcnvilaveina.Controllers;

import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Repository.EncuestadoresRepository;
import com.example.bcnvilaveina.services.EncuestadoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/")
public class EncuestadoresController {

    private EncuestadoresService encuestadoresService;

    @Autowired
    private EncuestadoresRepository encuestadoresRepository;

    @PostMapping("/create")
    private void crearEncuestador(@RequestBody Encuestadores encuestadores){
        encuestadoresRepository.insert(encuestadores);
    }

    @GetMapping("/enquestadors")
     private List<Encuestadores> ListaEncuestadores(){
        return encuestadoresRepository.findAll();
     }

     @DeleteMapping("/eliminar/{id}")
     private void eliminarEcuestador(@PathVariable String id){
        encuestadoresRepository.deleteById(id);
     }


}
