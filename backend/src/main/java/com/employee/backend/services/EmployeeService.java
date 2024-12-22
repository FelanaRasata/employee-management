package com.employee.backend.services;

import com.employee.backend.entities.Employee;
import com.employee.backend.repositories.EmployeeRepository;
import com.employee.backend.utils.dto.request.EmployeeRequestDTO;
import com.employee.backend.utils.pagination.PaginationResult;
import com.employee.backend.utils.validation.CustomException;
import org.springframework.stereotype.Component;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service qui gère les employés dans le système.
 * Fournit des méthodes pour créer, mettre à jour, et récupérer des informations sur les employés.
 */
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

    /**
     * Récupère un liste des employés paginés.
     *
     * @param page  le numéro de page à prendre
     * @param limit le nombre d'employé à récupérer
     * @return une liste de tous les employés dans la base de données.
     */
    public PaginationResult<Employee> findAll(int page, int limit) {

        // La page reçu commonce par 1 hors pour l'utiliser dans la fonction il faut qu'il commence par 0
        page--;

        // Prendre tous les employés si on ne précise pas le nombre à récupérer
        if (limit == -1)
            limit = Integer.MAX_VALUE;

        Pageable pageable = PageRequest.of(page, limit);
        Page<Employee> itemCategories = employeeRepository.findAll(pageable);

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

    public Employee update(long id, Employee employee) {

        // Vérification si l'employée avec l'ID existe
        boolean exist = exist(id);
        if (!exist) {
            return null;
        }

        Optional<Employee> optionalEmployee = employeeRepository.findByFullName(employee.getFullName().trim());

        if (optionalEmployee.isPresent() && optionalEmployee.get().getId() != id) {
            throw new CustomException("This full name is already used.");
        }

        Employee saved = new Employee();
        saved.setId(id);
        saved.setDateOfBirth(employee.getDateOfBirth());
        saved.setFullName(employee.getFullName());

        return saveOrUpdate(saved);

    }

}