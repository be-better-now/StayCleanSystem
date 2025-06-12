package com.stayclean.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // cho phép tất cả path
                .allowedOrigins("http://localhost:5173") // FE origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // GET, POST, PUT, DELETE, ...
                .allowedHeaders("*")
                .allowCredentials(true); // nếu có cookie/session
    }
}
