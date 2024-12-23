# Étape 1 : Utiliser une image Maven pour compiler le projet
FROM maven:3.9.5-eclipse-temurin-17-alpine AS builder
WORKDIR /app
COPY pom.xml ./
COPY src ./src
RUN mvn clean package -DskipTests

# Étape 2 : Utiliser une image légère pour exécuter le fichier .jar
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

RUN apk add --no-cache bash

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

#ENTRYPOINT ["java", "-jar", "app.jar"]
CMD /wait-for-it.sh database:5432 -- java -jar app.jar