# Instructions d'Installation et de Test de l'Application

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- **Docker** : Version récente (20.x ou supérieure recommandée).
- **Docker Compose** : Version 2.x ou supérieure.
- **Git** : Pour cloner le projet.

## Installation

### Étape 1 : Cloner le dépôt

Clonez le dépôt depuis votre plateforme de gestion de code source :

```bash
git clone <>
cd <>
```

### Étape 2 : Configuration de l'environnement

Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement nécessaires :

```env
# Base de données
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

### Étape 3 : Construire et lancer les conteneurs

Utilisez `docker-compose` pour construire et lancer l'application :

```bash
docker-compose build
docker-compose up -d
```

Cette commande :

- Télécharge les images Docker nécessaires.
- Construit les conteneurs pour le frontend, le backend et la base de données.
- Démarre tous les services.

### Étape 4 : Vérifier le déploiement

- Frontend : Accédez à l'interface utilisateur sur [http://localhost:5173](http://localhost:5173).
- Backend : Vérifiez les endpoints REST disponibles sur [http://localhost:8080](http://localhost:8080).
- Base de données : Le service PostgreSQL est accessible sur le port `5432`.

## Tests

### 1. Tests Manuels

#### a. Inscription et Authentification

1. Accédez à [http://localhost:5173](http://localhost:5173).
2. Créez un compte utilisateur avec un email valide et un mot de passe respectant les règles de sécurité :
   - Longueur entre 8 et 20 caractères
   - Inclure au moins un chiffre
   - Inclure au moins une lettre minuscule
   - Inclure au moins une lettre majuscule
   - Inclure au moins un caractère spécial
   - Aucun espace n'est autorisé
3. Connectez-vous pour accéder aux fonctionnalités protégées.

#### b. Fonctionnalité CRUD des Employés

1. Une fois connecté, vous arriverez sur une page d'accueil.
2. Accédez à la page `Employee` et testez les opérations suivantes via l'interface utilisateur :
   - Ajout d'un nouvel employé
   - Consultation de la liste des employés
   - Modification des informations d'un employé
   - Suppression d'un employé
3. Assurez-vous que les validations fonctionnent correctement, notamment l'unicité du nom et le format de la date de naissance.
