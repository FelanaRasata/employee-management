package com.employee.backend.utils.enumeration;

public enum EMessage {
    USERNAME_USED("Nom d'utilisateur déjà utilisé."),
    BAD_CREDENTIAL("Invalide nom d'utilisateur ou mot de passe."),


    ACCESS_DENIED("Vous n'êtes pas autorisé."),
    NOT_FOUND(" est introuvable."),

    SUCCESS("L'opération est un succès"),
    SUCCESS_UPDATED(" a été modifié"),
    SUCCESS_DELETED(" a été supprimé"),
    SUCCESS_CREATED(" a été créé"),

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

    public String byId(ETable entity, long id) {
        return entity.toString() + " avec l'id : " + id + " " + this.name;
    }

    public String byEntity(ETable entity) {
        return entity.toString() + " " + this.name;
    }

    public String byValue(String value) {
        return value + " " + this.name;
    }

}
