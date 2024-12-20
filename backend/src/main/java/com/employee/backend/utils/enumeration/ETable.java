package com.employee.backend.utils.enumeration;

public enum ETable {
    USER("Utilisateur"),
    EMPLOYEE("Employée"),;

    private final String name;

    ETable(String s) {
        name = s;
    }

    public String toString() {
        return this.name;
    }
}