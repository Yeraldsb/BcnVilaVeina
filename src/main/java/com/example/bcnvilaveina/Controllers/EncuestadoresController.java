package com.example.bcnvilaveina.Controllers;
import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Repository.EncuestadoresRepository;
import com.example.bcnvilaveina.services.EncuestadoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/enquestadors/{id}")
    private List<Encuestadores> ListaEncuestador() {
        return encuestadoresRepository.findAll();
    }

    @DeleteMapping("/eliminar/{id}")
    private void eliminarEcuestador(@PathVariable String id) {
        encuestadoresRepository.deleteById(id);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Encuestadores> update(@PathVariable(value = "id") String id, @Validated @RequestBody Encuestadores encuestadores) {
        Encuestadores oldEncuestador = encuestadoresRepository.findById(id).orElse(null);
        assert oldEncuestador != null;
        oldEncuestador.setNom(encuestadores.getNom());
        oldEncuestador.setCognom(encuestadores.getCognom());
        oldEncuestador.setVilaveina(encuestadores.getVilaveina());
        oldEncuestador.setUsuari(encuestadores.getUsuari());
        oldEncuestador.setContrasenya(encuestadores.getContrasenya());
        oldEncuestador.setTelefon(encuestadores.getTelefon());
        oldEncuestador.setAdreca(encuestadores.getAdreca());
        oldEncuestador.setCorreu(encuestadores.getCorreu());
        final Encuestadores update = encuestadoresRepository.save(oldEncuestador);
        return ResponseEntity.ok(update);

    }

}
