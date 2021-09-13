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

    @PostMapping("/encuestas")
    private void crearEncuesta(@RequestBody Encuestas encuestas){
        encuestasRepository.insert(encuestas);
    }

    @GetMapping("/listaencuestas")
    private List<Encuestas> ListaEncuestas(){
        return encuestasRepository.findAll();
    }

    @DeleteMapping("/eliminarEncuesta/{id}")
    private void eliminarEcuestas(@PathVariable String id){
        encuestasRepository.deleteById(id);
    }

}
