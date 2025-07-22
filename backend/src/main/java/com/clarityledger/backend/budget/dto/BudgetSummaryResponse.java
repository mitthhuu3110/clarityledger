package com.clarityledger.backend.budget.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class BudgetSummaryResponse {
    private BigDecimal totalBudget;
    private BigDecimal totalSpent;
    private BigDecimal remaining;
    private Double percentageUsed;
}