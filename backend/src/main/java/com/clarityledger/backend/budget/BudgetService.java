package com.clarityledger.backend.budget;

import com.clarityledger.backend.budget.dto.BudgetRequest;
import com.clarityledger.backend.budget.dto.BudgetResponse;
import com.clarityledger.backend.budget.dto.BudgetSummaryResponse;
import com.clarityledger.backend.transaction.Transaction;
import com.clarityledger.backend.transaction.TransactionRepository;
import com.clarityledger.backend.transaction.TransactionType;
import com.clarityledger.backend.user.User;
import com.clarityledger.backend.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BudgetService {

    private final BudgetRepository budgetRepository;
    private final UserRepository userRepository;
    private final TransactionRepository transactionRepository;

    private User getUser(UserDetails userDetails) {
        return userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public BudgetResponse createBudget(BudgetRequest request, UserDetails userDetails) {
        User user = getUser(userDetails);

        Budget budget = Budget.builder()
                .amount(request.getAmount())
                .category(request.getCategory())
                .frequency(request.getFrequency())
                .validFrom(request.getValidFrom())
                .validTo(request.getValidTo())
                .user(user)
                .build();

        budgetRepository.save(budget);
        return mapToResponse(budget);
    }

    public List<BudgetResponse> getAllBudgets(UserDetails userDetails) {
        User user = getUser(userDetails);

        return budgetRepository.findByUser(user).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public BudgetResponse updateBudget(Long id, BudgetRequest request, UserDetails userDetails) {
        User user = getUser(userDetails);

        Budget budget = budgetRepository.findById(id)
                .filter(b -> b.getUser().getId().equals(user.getId()))
                .orElseThrow(() -> new RuntimeException("Budget not found or unauthorized"));

        budget.setAmount(request.getAmount());
        budget.setCategory(request.getCategory());
        budget.setFrequency(request.getFrequency());
        budget.setValidFrom(request.getValidFrom());
        budget.setValidTo(request.getValidTo());

        budgetRepository.save(budget);
        return mapToResponse(budget);
    }

    public void deleteBudget(Long id, UserDetails userDetails) {
        User user = getUser(userDetails);

        Budget budget = budgetRepository.findById(id)
                .filter(b -> b.getUser().getId().equals(user.getId()))
                .orElseThrow(() -> new RuntimeException("Budget not found or unauthorized"));

        budgetRepository.delete(budget);
    }

    public BudgetSummaryResponse getBudgetSummary(UserDetails userDetails) {
        User user = getUser(userDetails);

        List<Budget> budgets = budgetRepository.findByUser(user);
        List<Transaction> transactions = transactionRepository.findByUser(user);

        BigDecimal totalBudget = budgets.stream()
                .map(Budget::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal totalSpent = transactions.stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal remaining = totalBudget.subtract(totalSpent);
        double percentageUsed = totalBudget.compareTo(BigDecimal.ZERO) > 0
                ? totalSpent.multiply(BigDecimal.valueOf(100)).divide(totalBudget, 2, BigDecimal.ROUND_HALF_UP).doubleValue()
                : 0.0;

        return BudgetSummaryResponse.builder()
                .totalBudget(totalBudget)
                .totalSpent(totalSpent)
                .remaining(remaining)
                .percentageUsed(percentageUsed)
                .build();
    }

    private BudgetResponse mapToResponse(Budget budget) {
        return BudgetResponse.builder()
                .id(budget.getId())
                .amount(budget.getAmount())
                .category(budget.getCategory())
                .frequency(budget.getFrequency())
                .validFrom(budget.getValidFrom())
                .validTo(budget.getValidTo())
                .build();
    }
}