package com.example.bcnvilaveina.Controllers;

import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Model.Vilaveina;
import com.example.bcnvilaveina.Repository.VilaveinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class VilaveinaController {
    @Autowired
    private VilaveinaRepository vilaveinaRepository;

    @PostMapping("/crear")
    private void crearVilaveina(@RequestBody Vilaveina vilaveina){
        vilaveinaRepository.insert(vilaveina);
    }
    @GetMapping("/lista")
    private List<Vilaveina> ListaVilaveina(){
        return vilaveinaRepository.findAll();
    }

    @DeleteMapping("/eliminar/{id}")
    private void eliminarEcuestadores(@PathVariable String id){
        vilaveinaRepository.deleteById(id);
    }


}
