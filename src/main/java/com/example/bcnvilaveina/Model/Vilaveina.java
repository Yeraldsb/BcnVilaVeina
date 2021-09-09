package com.example.bcnvilaveina.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "VilaVeina")
public class Vilaveina {
    @Id
    private String id;
    private String nom;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }
    @Override
    public String toString() {
        return "VilaVeina [id=" + id + ", nom=" + nom + "]";
    }
}
