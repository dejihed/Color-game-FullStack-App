package com.stage.color_game.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class securityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Disable CSRF
            .authorizeHttpRequests(authorize -> authorize.anyRequest().permitAll()) // Allow all requests without authentication
            .httpBasic().disable() // Disable basic authentication
            .formLogin().disable(); // Disable form login

        return http.build();
    }
}
