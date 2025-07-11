package com.stayclean;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
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

@SecurityScheme(
        name = "api", // Bắt buộc trùng với name sử dụng trong @SecurityRequirement
        type = SecuritySchemeType.HTTP,
        scheme = "bearer",
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)
public class StayCleanSystemApplication {
    public static void main(String[] args) {
        SpringApplication.run(StayCleanSystemApplication.class, args);
    }
}
