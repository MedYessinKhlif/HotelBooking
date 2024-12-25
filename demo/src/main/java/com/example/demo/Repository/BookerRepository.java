package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Entity.Booker;

@Repository
public interface BookerRepository extends CrudRepository<Booker, String> {
}
