package com.clarityledger.backend.auth;
// DTO: contains the JWT token returned to frontend

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;
}