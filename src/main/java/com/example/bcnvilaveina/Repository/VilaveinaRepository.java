package com.example.bcnvilaveina.Repository;


import com.example.bcnvilaveina.Model.Vilaveina;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VilaveinaRepository extends MongoRepository<Vilaveina, String> {
}
