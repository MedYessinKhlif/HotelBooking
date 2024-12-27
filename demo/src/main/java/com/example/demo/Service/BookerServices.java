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

    public Iterable<Booker> listAll() {
        return this.repo.findAll();
    }

    public void saveOrUpdate(Booker booker) {  
        repo.save(booker);  
    }

    public Booker getBookerById(String idInfo) {  
        return repo.findById(idInfo).orElse(null);  
    }

    public void update(Booker booker, String idInfo) {  
        if (repo.existsById(idInfo)) {
            repo.save(booker);
        }
    }

    public void delete(String idInfo) {  
        repo.deleteById(idInfo);  
    }
}
