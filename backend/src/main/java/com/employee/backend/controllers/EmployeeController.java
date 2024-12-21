package com.employee.backend.controllers;


import com.employee.backend.entities.Employee;
import com.employee.backend.services.EmployeeService;
import com.employee.backend.utils.dto.ResponseType;
import com.employee.backend.utils.enumeration.EMessage;
import com.employee.backend.utils.enumeration.ETable;
import com.employee.backend.utils.pagination.PaginationResult;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/employee")
@CrossOrigin("*")
public class EmployeeController {

    private final EmployeeService employeeService;


    public EmployeeController(EmployeeService employeeService) {

        this.employeeService = employeeService;

    }


    @PostMapping()
    public ResponseEntity<?> saveEmployee(@RequestBody Employee employee) {

        Employee saved = employeeService.save(employee);

        if (saved == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ResponseType<>(EMessage.FAILED_CREATED.byEntity(ETable.EMPLOYEE)));
        }

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ResponseType<>(EMessage.SUCCESS_CREATED.byEntity(ETable.EMPLOYEE), saved));

    }

    @GetMapping("{id}")
    public ResponseEntity<?> getEmployee(@PathVariable long id) {

        Employee employee = employeeService.findById(id);

        if (employee == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseType<>(EMessage.NOT_FOUND.byId(ETable.EMPLOYEE, id)));
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseType<>(EMessage.SUCCESS.toString(), employee));

    }

    @GetMapping("")
    public ResponseEntity<?> getEmployees(
            @RequestParam(required = false, defaultValue = "1") int page,
            @RequestParam(required = false, defaultValue = "-1") int limit,
            @RequestParam(required = false, defaultValue = "") String keyword
    ) {

        PaginationResult<Employee> employees = employeeService.findAll(page, limit, keyword);
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseType<>(EMessage.SUCCESS.toString(), employees));

    }


    @PutMapping("{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable long id, @RequestBody Employee employee) {

        Employee updated = employeeService.update(id, employee);

        if (updated == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ResponseType<>(EMessage.NOT_FOUND.byId(ETable.EMPLOYEE, id)));
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseType<>(EMessage.SUCCESS_UPDATED.byId(ETable.EMPLOYEE, id)));

    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable long id) {

        employeeService.delete(id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseType<>(EMessage.SUCCESS_DELETED.byId(ETable.EMPLOYEE, id)));

    }

    @GetMapping("test")
    public String test() {

        return "test";

    }
}