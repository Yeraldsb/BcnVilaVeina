package com.example.bcnvilaveina.Repository;

import com.example.bcnvilaveina.Model.Encuestas;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EncuestasRepository extends MongoRepository<Encuestas, String> {

}
