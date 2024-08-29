package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api")
public class DemoApplicationController {

    @CrossOrigin(origins = "http://localhost:5000")
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from the Java backend";
    }
    
}
