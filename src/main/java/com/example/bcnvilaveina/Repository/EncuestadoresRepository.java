package com.example.bcnvilaveina.Repository;

import com.example.bcnvilaveina.Model.Encuestadores;
import com.example.bcnvilaveina.Model.Encuestas;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface EncuestadoresRepository extends MongoRepository <Encuestadores, String> {

}
