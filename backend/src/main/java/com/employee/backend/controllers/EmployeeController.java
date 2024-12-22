package com.employee.backend.controllers;


import com.employee.backend.entities.Employee;
import com.employee.backend.services.EmployeeService;
import com.employee.backend.utils.dto.ResponseType;
import com.employee.backend.utils.dto.request.EmployeeRequestDTO;
import com.employee.backend.utils.enumeration.EMessage;
import com.employee.backend.utils.pagination.PaginationResult;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Contrôleur REST pour gérer les employés.
 * Ce contrôleur permet de créer, récupérer, mettre à jour et supprimer des employés.
 */
@RestController
@RequestMapping("api/employee")
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService employeeService;


    public EmployeeController(EmployeeService employeeService) {

        this.employeeService = employeeService;

    }


    /**
     * Crée un nouvel employé.
     *
     * @param employee L'objet employé à créer.
     * @return une réponse contenant l'employé créé ou un message d'erreur.
     */
    @PostMapping()
    public ResponseEntity<?> saveEmployee(@RequestBody @Valid EmployeeRequestDTO employee) {

        Employee saved = employeeService.save(employee);

        // Vérification si l'employé a été créé sinon on envoie un message d'erreur
        if (saved == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseType<>(EMessage.FAILED_CREATED.byEntity(Employee.class.getSimpleName())));
        }

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ResponseType<>(EMessage.SUCCESS_CREATED.byEntity(Employee.class.getSimpleName()), saved));

    }

    /**
     * Récupère un employé par son ID.
     *
     * @param id l'ID de l'employé à récupérer.
     * @return l'employé correspondant à l'ID, ou une erreur si non trouvé.
     */
    @GetMapping("{id}")
    public ResponseEntity<?> getEmployee(@PathVariable long id) {

        Employee employee = employeeService.findById(id);

        // Vérification si l'employé a été récupéré sinon on envoie un message d'erreur
        if (employee == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseType<>(EMessage.NOT_FOUND.byId(Employee.class.getSimpleName(), id)));
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseType<>(EMessage.SUCCESS.toString(), employee));

    }

    /**
     * Récupère un liste des employés paginés.
     *
     * @param page    le numéro de page à prendre
     * @param limit   le nombre d'employé à récupérer
     * @param keyword un mot à rechercher
     * @return une liste de tous les employés dans la base de données.
     */
    @GetMapping("")
    public ResponseEntity<?> getEmployees(
            @RequestParam(required = false, defaultValue = "1") int page,
            @RequestParam(required = false, defaultValue = "-1") int limit
    ) {

        PaginationResult<Employee> employees = employeeService.findAll(page, limit);
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseType<>(EMessage.SUCCESS.toString(), employees));

    }


    /**
     * Met à jour les informations d'un employé existant.
     *
     * @param id       l'ID de l'employé à mettre à jour.
     * @param employee les nouvelles informations de l'employé.
     * @return la réponse avec l'employé mis à jour ou un message d'erreur.
     */
    @PutMapping("{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable long id, @RequestBody @Valid Employee employee) {

        Employee updated = employeeService.update(id, employee);

        // Vérification si l'employé a été modifié sinon on envoie un message d'erreur
        if (updated == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseType<>(EMessage.NOT_FOUND.byId(Employee.class.getSimpleName(), id)));
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseType<>(EMessage.SUCCESS_UPDATED.byId(Employee.class.getSimpleName(), id)));

    }

    /**
     * Supprime un employé par son ID.
     *
     * @param id l'ID de l'employé à supprimer.
     * @return une réponse confirmant la suppression ou un message d'erreur.
     */
    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable long id) {

        employeeService.delete(id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseType<>(EMessage.SUCCESS_DELETED.byId(Employee.class.getSimpleName(), id)));

    }


}