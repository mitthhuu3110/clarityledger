package com.clarityledger.backend.transaction.dto;

import com.clarityledger.backend.transaction.TransactionType;
import com.clarityledger.backend.transaction.TransactionCategory;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionRequest {
    private BigDecimal amount;
    private String description;
    private TransactionType type;
    private TransactionCategory category;
    private LocalDate date;
}