package com.clarityledger.backend.dashboard;

import com.clarityledger.backend.budget.Budget;
import com.clarityledger.backend.budget.BudgetRepository;
import com.clarityledger.backend.dashboard.dto.DashboardResponse;
import com.clarityledger.backend.forecast.ForecastService;
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
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.*;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final UserRepository userRepository;
    private final TransactionRepository transactionRepository;
    private final BudgetRepository budgetRepository;
    private final ForecastService forecastService;

    public DashboardResponse getDashboard(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        LocalDate now = LocalDate.now();
        int currentMonth = now.getMonthValue();
        int currentYear = now.getYear();

        List<Transaction> transactions = transactionRepository.findByUser(user);
        BigDecimal income = BigDecimal.ZERO;
        BigDecimal expense = BigDecimal.ZERO;

        Map<String, BigDecimal> incomeByCategory = new HashMap<>();
        Map<String, BigDecimal> expenseByCategory = new HashMap<>();
        BigDecimal thisMonthExpense = BigDecimal.ZERO;

        for (Transaction t : transactions) {
            if (t.getDate().getMonthValue() == currentMonth && t.getDate().getYear() == currentYear) {
                if (t.getType() == TransactionType.INCOME) {
                    income = income.add(t.getAmount());
                    incomeByCategory.merge(t.getCategory().name(), t.getAmount(), BigDecimal::add);
                } else {
                    expense = expense.add(t.getAmount());
                    expenseByCategory.merge(t.getCategory().name(), t.getAmount(), BigDecimal::add);
                    thisMonthExpense = thisMonthExpense.add(t.getAmount());
                }
            }
        }

        // ✅ Corrected to match your actual method name
        Optional<Budget> currentBudget = budgetRepository.findByUser(user).stream()
                .filter(b -> b.getValidFrom().getMonthValue() == currentMonth &&
                        b.getValidFrom().getYear() == currentYear)
                .findFirst();

        BigDecimal budgetLimit = currentBudget.map(Budget::getAmount).orElse(BigDecimal.ZERO);
        BigDecimal remaining = budgetLimit.subtract(thisMonthExpense);
        double percentSpent = budgetLimit.compareTo(BigDecimal.ZERO) > 0 ?
                thisMonthExpense.divide(budgetLimit, 2, RoundingMode.HALF_UP).doubleValue() * 100 : 0;

        BigDecimal forecast = forecastService.forecast(user); // ✅ Make sure this method exists!

        return DashboardResponse.builder()
                .totalIncome(income)
                .totalExpense(expense)
                .balance(income.subtract(expense))
                .incomeByCategory(incomeByCategory)
                .expenseByCategory(expenseByCategory)
                .forecastedExpense(forecast)
                .budgetLimit(budgetLimit)
                .amountSpent(thisMonthExpense)
                .amountRemaining(remaining)
                .percentSpent(percentSpent)
                .build();
    }
}