package com.clarityledger.backend.auth;
// DTO: holds username, email, password on registration

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
}