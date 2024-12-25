package com.example.demo.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.Booker;
import com.example.demo.Repository.BookerRepository;

@Service
public class BookerServices {

    @Autowired
    private BookerRepository repo;

    // List all bookers
    public Iterable<Booker> listAll() {
        return this.repo.findAll();
    }

    // Save or update a specific record
    public void saveOrUpdate(Booker booker) {  
        repo.save(booker);  
    }

    // Get Booker by idInfo (String instead of long)
    public Booker getBookerById(String idInfo) {  
        return repo.findById(idInfo).orElse(null);  
    }

    // Update Booker (method signature adjusted to match)
    public void update(Booker booker, String idInfo) {  
        if (repo.existsById(idInfo)) {
            repo.save(booker);
        }
    }

    // Delete Booker by idInfo (String instead of long)
    public void delete(String idInfo) {  
        repo.deleteById(idInfo);  
    }
}
