package com.clarityledger.backend.transaction.dto;

import com.clarityledger.backend.transaction.TransactionType;
import com.clarityledger.backend.transaction.TransactionCategory;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class TransactionRequest {

    @NotNull
    private BigDecimal amount; // ✅ FIXED: now matches your Entity type

    @NotNull
    private String description;

    @NotNull
    private TransactionType type;

    @NotNull
    private TransactionCategory category;

    @NotNull
    private LocalDate date;
}