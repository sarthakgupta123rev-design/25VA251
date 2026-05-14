package com.example.studentapi.controller;

import com.example.studentapi.model.Student;
import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    // Welcome API
    @GetMapping("/")
    public String welcome() {

        return "Welcome to Student Management REST API";
    }

    // GET API
    @GetMapping("/student")
    public Student getStudent() {

        return new Student(
                101,
                "Sarthak Gupta",
                "B.Tech CSE"
        );
    }

    // POST API
    @PostMapping("/student")
    public Student addStudent(@RequestBody Student student) {

        return student;
    }
}