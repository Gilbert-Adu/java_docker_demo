FROM gradle:7.5.0-jdk17 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon

#run application with openJDK
FROM openjdk:17
COPY --from=build /home/gradle/src/build/libs/demo-0.0.1-SNAPSHOT.jar /app/demo.jar
ENTRYPOINT [ "java", "-jar", "/app/demo.jar" ]