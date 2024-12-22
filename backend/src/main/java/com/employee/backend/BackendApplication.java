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

    @Autowired
    private EmployeeRepository employeeRepository;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner insertData() {
        return args -> {
            // Vérifier si la table Employee est vide
            List<Employee> employees = employeeRepository.findAll();

            // Si la liste des employés est vide, insérer les données
            if (employees.isEmpty()) {
                employeeRepository.save(new Employee("John Doe", LocalDate.of(1985, 2, 15)));
                employeeRepository.save(new Employee("Jane Smith", LocalDate.of(1990, 6, 22)));
                employeeRepository.save(new Employee("Alice Johnson", LocalDate.of(1982, 11, 5)));
                employeeRepository.save(new Employee("Bob Brown", LocalDate.of(1978, 7, 14)));
                employeeRepository.save(new Employee("Charlie Davis", LocalDate.of(1995, 1, 20)));
                employeeRepository.save(new Employee("David Wilson", LocalDate.of(1983, 9, 9)));
                employeeRepository.save(new Employee("Eva Martinez", LocalDate.of(1992, 12, 12)));
                employeeRepository.save(new Employee("Frank Anderson", LocalDate.of(1987, 5, 30)));
                employeeRepository.save(new Employee("Grace Thomas", LocalDate.of(1994, 3, 17)));
                employeeRepository.save(new Employee("Hannah Lee", LocalDate.of(1989, 4, 3)));
                employeeRepository.save(new Employee("Isaac Walker", LocalDate.of(1991, 10, 25)));
                employeeRepository.save(new Employee("Jack Harris", LocalDate.of(1980, 8, 19)));
                employeeRepository.save(new Employee("Katherine Clark", LocalDate.of(1993, 2, 28)));
                employeeRepository.save(new Employee("Liam Lewis", LocalDate.of(1986, 1, 11)));
                employeeRepository.save(new Employee("Megan Young", LocalDate.of(1996, 12, 1)));
                employeeRepository.save(new Employee("Nina King", LocalDate.of(1988, 9, 29)));
                employeeRepository.save(new Employee("Oliver Scott", LocalDate.of(1994, 5, 16)));
                employeeRepository.save(new Employee("Paul Evans", LocalDate.of(1981, 3, 22)));
                employeeRepository.save(new Employee("Quincy White", LocalDate.of(1990, 7, 7)));
                employeeRepository.save(new Employee("Rachel Perez", LocalDate.of(1992, 10, 13)));
            } else {
                System.out.println("La table des employés n'est pas vide, aucune donnée insérée.");
            }
        };
    }

}
