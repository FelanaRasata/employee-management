package com.employee.backend.repositories;

import com.employee.backend.entities.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Page<Employee> findByFullNameContainsIgnoreCase(String keyword, Pageable pageable);
}
