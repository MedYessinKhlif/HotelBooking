package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Booker;
import com.example.demo.Service.BookerServices;

@CrossOrigin(origins = "http://localhost:5173") 
@RestController
public class BookerController {

    @Autowired
    private BookerServices services;

    // Get all bookers
    @GetMapping("/getall")
    public Iterable<Booker> getBookers() {
        return services.listAll();     
    }

    // Save or update a booker
    @PostMapping(value = "/save")
    private String saveBook(@RequestBody Booker booker) {  
        services.saveOrUpdate(booker);  
        return booker.getIdInfo();  
    }

    // Get a specific booker by idInfo (String)
    @RequestMapping("/Booker/{idInfo}")
    private Booker getBookerById(@PathVariable(name = "idInfo") String idInfo) {  
        return services.getBookerById(idInfo);  
    }

    // Update a booker
    @PutMapping("/edit/{idInfo}")
    private Booker update(@RequestBody Booker booker, @PathVariable("idInfo") String idInfo) {  
        services.update(booker, idInfo);  
        return booker;  
    }

    // Delete a booker by idInfo (String)
    @DeleteMapping("/delete/{idInfo}")
    private void deleteBooker(@PathVariable("idInfo") String idInfo) {  
        services.delete(idInfo);  
    }
}
