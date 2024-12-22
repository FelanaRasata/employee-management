package com.employee.backend.services;

import com.employee.backend.entities.Employee;
import com.employee.backend.repositories.EmployeeRepository;
import com.employee.backend.utils.dto.request.EmployeeRequestDTO;
import com.employee.backend.utils.pagination.PaginationResult;
import org.springframework.stereotype.Component;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

@Component
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee findById(long id) {
        Optional<Employee> categoryOptional = employeeRepository.findById(id);
        return categoryOptional.orElse(null);
    }

    public PaginationResult<Employee> findAll(int page, int limit, String keyword) {
        page--;

        if (limit == -1)
            limit = Integer.MAX_VALUE;

        Pageable pageable = PageRequest.of(page, limit);
        Page<Employee> itemCategories = employeeRepository.findByFullNameContainsIgnoreCase(keyword, pageable);

        return new PaginationResult<Employee>(itemCategories);

    }

    public boolean exist(long id) {
        return employeeRepository.existsById(id);
    }

    public Employee save(EmployeeRequestDTO employee) {

        Employee saved = new Employee();
        saved.setDateOfBirth(employee.getDateOfBirth());
        saved.setFullName(employee.getFullName());
        return saveOrUpdate(saved);
    }

    private Employee saveOrUpdate(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void delete(long id) {
        employeeRepository.deleteById(id);
    }

    public Employee update(long id, EmployeeRequestDTO employee) {

        boolean exist = exist(id);
        if (!exist) {
            return null;
        }

        Employee saved = new Employee();
        saved.setId(id);
        saved.setDateOfBirth(employee.getDateOfBirth());
        saved.setFullName(employee.getFullName());

        return saveOrUpdate(saved);

    }

}