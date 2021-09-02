package com.example.bcnvilaveina.Repository;

import com.example.bcnvilaveina.Model.Encuestadores;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EncuestadoresRepository extends MongoRepository <Encuestadores, String>
{

}
