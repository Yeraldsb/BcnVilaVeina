package com.example.bcnvilaveina.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Encuesta")

public class Encuestas {
    @Id
    private String id;
    private String barris;
    private String genere;
    private String canalDeAtencio;
    private String edat;
    private String llocDeNaixement;
    private String consultaDeTitol;
    private String motiuCures;
    private String situacioJuridica;
    private String serveisTramits;
    private String nivelEstudis;
    private String situacioLaboral;
    private String comenshaconegut;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBarris() {
        return barris;
    }

    public void setBarris(String barris) {
        this.barris = barris;
    }

    public String getGenere() {
        return genere;
    }

    public void setGenere(String genere) {
        this.genere = genere;
    }

    public String getCanalDeAtencio() {
        return canalDeAtencio;
    }

    public void setCanalDeAtencio(String canalDeAtencio) {
        this.canalDeAtencio = canalDeAtencio;
    }

    public String getEdat() {
        return edat;
    }

    public void setEdat(String edat) {
        this.edat = edat;
    }

    public String getLlocDeNaixement() {
        return llocDeNaixement;
    }

    public void setLlocDeNaixement(String llocDeNaixement) {
        this.llocDeNaixement = llocDeNaixement;
    }

    public String getConsultaDeTitol() {
        return consultaDeTitol;
    }

    public void setConsultaDeTitol(String consultaDeTitol) {
        this.consultaDeTitol = consultaDeTitol;
    }

    public String getMotiuCures() {
        return motiuCures;
    }

    public void setMotiuCures(String motiuCures) {
        this.motiuCures = motiuCures;
    }

    public String getSituacioJuridica() {
        return situacioJuridica;
    }

    public void setSituacioJuridica(String situacioJuridica) {
        this.situacioJuridica = situacioJuridica;
    }

    public String getServeisTramits() {
        return serveisTramits;
    }

    public void setServeisTramits(String serveisTramits) {
        this.serveisTramits = serveisTramits;
    }

    public String getNivelEstudis() {
        return nivelEstudis;
    }

    public void setNivelEstudis(String nivelEstudis) {
        this.nivelEstudis = nivelEstudis;
    }

    public String getSituacioLaboral() {
        return situacioLaboral;
    }

    public void setSituacioLaboral(String situacioLaboral) {
        this.situacioLaboral = situacioLaboral;
    }

    public String getComenshaconegut() {
        return comenshaconegut;
    }

    public void setComenshaconegut(String comenshaconegut) {
        this.comenshaconegut = comenshaconegut;
    }

}
