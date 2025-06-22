package com.clarityledger.backend.auth;
// DTO: holds email & password on login
import lombok.Data;

@Data
public class AuthRequest {
    private String email;
    private String password;
}