package com.clarityledger.backend.forecast;

import com.clarityledger.backend.forecast.dto.ForecastResponse;
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
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ForecastService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    // ✅ For Forecast API with months param
    public ForecastResponse predictNextMonthExpense(UserDetails userDetails, int months) {
        if (months <= 0) {
            return ForecastResponse.builder()
                    .predictedExpense(BigDecimal.ZERO)
                    .monthsConsidered(months)
                    .message("Invalid months input")
                    .build();
        }

        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        LocalDate today = LocalDate.now();
        LocalDate fromDate = today.minusMonths(months).withDayOfMonth(1); // start of X months ago

        List<Transaction> expenseTxns = transactionRepository.findByUser(user).stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .filter(t -> !t.getDate().isBefore(fromDate))
                .collect(Collectors.toList());

        // Group by Year-Month
        Map<String, List<Transaction>> monthlyMap = expenseTxns.stream()
                .collect(Collectors.groupingBy(t -> t.getDate().getYear() + "-" + t.getDate().getMonthValue()));

        BigDecimal total = BigDecimal.ZERO;
        int validMonths = 0;

        for (Map.Entry<String, List<Transaction>> entry : monthlyMap.entrySet()) {
            BigDecimal monthTotal = entry.getValue().stream()
                    .map(Transaction::getAmount)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            total = total.add(monthTotal);
            validMonths++;
        }

        BigDecimal predicted = validMonths > 0
                ? total.divide(BigDecimal.valueOf(validMonths), 2, RoundingMode.HALF_UP)
                : BigDecimal.ZERO;

        return ForecastResponse.builder()
                .predictedExpense(predicted)
                .monthsConsidered(months)
                .message("Prediction based on last " + validMonths + " month(s)")
                .build();
    }

    // ✅ New method used by DashboardService
    public BigDecimal forecast(User user) {
        LocalDate today = LocalDate.now();
        LocalDate fromDate = today.minusMonths(3).withDayOfMonth(1); // defaulting to last 3 months

        List<Transaction> expenseTxns = transactionRepository.findByUser(user).stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .filter(t -> !t.getDate().isBefore(fromDate))
                .collect(Collectors.toList());

        Map<String, List<Transaction>> monthlyMap = expenseTxns.stream()
                .collect(Collectors.groupingBy(t -> t.getDate().getYear() + "-" + t.getDate().getMonthValue()));

        BigDecimal total = BigDecimal.ZERO;
        int validMonths = 0;

        for (List<Transaction> monthlyTxns : monthlyMap.values()) {
            BigDecimal monthTotal = monthlyTxns.stream()
                    .map(Transaction::getAmount)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            total = total.add(monthTotal);
            validMonths++;
        }

        return validMonths > 0
                ? total.divide(BigDecimal.valueOf(validMonths), 2, RoundingMode.HALF_UP)
                : BigDecimal.ZERO;
    }
}