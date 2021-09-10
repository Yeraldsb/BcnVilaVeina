package com.example.bcnvilaveina.Controllers;

import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Model.Vilaveina;
import com.example.bcnvilaveina.Repository.VilaveinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class VilaveinaController {
    @Autowired
    private VilaveinaRepository vilaveinaRepository;

    @PostMapping("/crearbarrios")
    private void crearVilaveina(@RequestBody Vilaveina vilaveina){
        vilaveinaRepository.insert(vilaveina);
    }

    @GetMapping("/barrios")
    private List<Vilaveina> ListaVilaveina(){
        return vilaveinaRepository.findAll();
    }

    @DeleteMapping("/eliminarbarrios/{id}")
    private void eliminarVilaveina(@PathVariable String id){
        vilaveinaRepository.deleteById(id);
    }


}
