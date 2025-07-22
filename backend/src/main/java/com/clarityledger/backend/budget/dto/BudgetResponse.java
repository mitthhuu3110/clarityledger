package com.clarityledger.backend.budget.dto;

import com.clarityledger.backend.budget.BudgetFrequency;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
public class BudgetResponse {

    private Long id;
    private BigDecimal amount;
    private String category;
    private BudgetFrequency frequency;
    private LocalDate validFrom;
    private LocalDate validTo;
}