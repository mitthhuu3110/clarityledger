package com.clarityledger.backend.dashboard.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.Map;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DashboardResponse {
    private BigDecimal totalIncome;
    private BigDecimal totalExpense;
    private BigDecimal balance;

    private Map<String, BigDecimal> incomeByCategory;
    private Map<String, BigDecimal> expenseByCategory;

    private BigDecimal forecastedExpense;

    private BigDecimal budgetLimit;
    private BigDecimal amountSpent;
    private BigDecimal amountRemaining;
    private Double percentSpent;
}