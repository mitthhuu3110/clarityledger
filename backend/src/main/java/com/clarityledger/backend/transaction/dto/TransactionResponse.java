package com.clarityledger.backend.transaction.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
public class TransactionResponse {

    private Long id;

    private BigDecimal amount;

    private String description;

    private String type; // Return as String for simplicity

    private String category;

    private LocalDate date;
}