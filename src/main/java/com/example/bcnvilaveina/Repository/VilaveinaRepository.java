package com.example.bcnvilaveina.Repository;


import com.example.bcnvilaveina.Model.Vilaveina;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VilaveinaRepository extends MongoRepository<Vilaveina, String> {
   // List<Vilaveina> findByNom(String nom);
  // List<Vilaveina> getByVilaveina( String  vilaveinaId);


}
