package com.stayclean;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
        info = @Info(
                title = "StayClean API",
                version = "1.0",
                description = "Backend API for StayClean web application"
        )
)
public class StayCleanSystemApplication {
    public static void main(String[] args) {
        SpringApplication.run(StayCleanSystemApplication.class, args);
    }
}
