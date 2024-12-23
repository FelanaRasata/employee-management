package com.employee.backend;

import com.employee.backend.entities.Employee;
import com.employee.backend.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class BackendApplication {


    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }





}


