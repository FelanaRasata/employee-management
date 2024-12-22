package com.employee.backend.utils.enumeration;

/**
 * Enum des messages de réponse positif ou négatif
 *
 */
public enum EMessage {
    BAD_CREDENTIAL("Username or password invalid"),


    NOT_FOUND(" not found."),

    SUCCESS("The operation was successful"),
    SUCCESS_UPDATED(" is updated"),
    SUCCESS_DELETED(" is deleted"),
    SUCCESS_CREATED(" is created"),

    FAILED_CREATED(" n'a été pas créé");

    private final String name;

    EMessage(String s) {
        name = s;
    }

    public boolean equalsName(String otherName) {
        // (otherName == null) check is not needed because name.equals(null) returns false
        return name.equals(otherName);
    }

    public String toString() {
        return this.name;
    }

    public String byId(String entity, long id) {
        return entity + " ID : " + id + " " + this.name;
    }

    public String byEntity(String entity) {
        return entity + " " + this.name;
    }

    public String byValue(String value) {
        return value + " " + this.name;
    }

}
