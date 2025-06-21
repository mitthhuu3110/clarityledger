package com.clarityledger.backend.auth;

import lombok.Data;

@Data
public class AuthRequest {
    private String email;
    private String password;
}