package com.example.bcnvilaveina.Controllers;

import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Repository.EncuestadoresRepository;
import com.example.bcnvilaveina.services.EncuestadoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private void crearEncuestador(@RequestBody Encuestadores encuestadores) {
        encuestadoresRepository.insert(encuestadores);
    }

    @GetMapping("/enquestadors")
    private List<Encuestadores> ListaEncuestadores() {
        return encuestadoresRepository.findAll();
    }

    @DeleteMapping("/eliminar/{id}")
    private void eliminarEcuestador(@PathVariable String id) {
        encuestadoresRepository.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Encuestadores> update(@PathVariable String id, @RequestBody Encuestadores encuestadores) {
        Encuestadores oldEncuestador = encuestadoresRepository.findById(id).orElse(null);
        if(oldEncuestador != null){
            oldEncuestador.setNom(encuestadores.getNom());
            oldEncuestador.setCognom(encuestadores.getCognom());
            oldEncuestador.setVilaveina(encuestadores.getVilaveina());
            oldEncuestador.setUsuari(encuestadores.getUsuari());
            oldEncuestador.setContrasenya(encuestadores.getContrasenya());
            oldEncuestador.setTelefon(encuestadores.getTelefon());
            oldEncuestador.setAdreca(encuestadores.getAdreca());
            oldEncuestador.setCorreu(encuestadores.getCorreu());
            return ResponseEntity.ok(encuestadoresRepository.save(oldEncuestador));
        }
        return new ResponseEntity(HttpStatus.CONFLICT);
    }

}
