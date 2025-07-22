package com.clarityledger.backend.budget.dto;

import com.clarityledger.backend.budget.BudgetFrequency;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class BudgetRequest {

    @NotNull
    private BigDecimal amount;

    @NotNull
    private String category;

    @NotNull
    private BudgetFrequency frequency;

    @NotNull
    private LocalDate validFrom;

    @NotNull
    private LocalDate validTo;
}