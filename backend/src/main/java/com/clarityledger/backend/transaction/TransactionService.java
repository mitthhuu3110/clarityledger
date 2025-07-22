package com.clarityledger.backend.transaction;

import com.clarityledger.backend.transaction.dto.TransactionRequest;
import com.clarityledger.backend.transaction.dto.TransactionResponse;
import com.clarityledger.backend.user.User;
import com.clarityledger.backend.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    public TransactionResponse createTransaction(TransactionRequest request, UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Transaction transaction = Transaction.builder()
                .amount(request.getAmount())  // ✅ BigDecimal
                .description(request.getDescription())
                .type(request.getType())  // ✅ Enum
                .category(request.getCategory()) // ✅ Enum
                .date(request.getDate())
                .user(user)
                .build();

        transactionRepository.save(transaction);
        return mapToResponse(transaction);
    }

    public List<TransactionResponse> getAllTransactions(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return transactionRepository.findByUser(user).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public TransactionResponse updateTransaction(Long id, TransactionRequest request, UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Transaction transaction = transactionRepository.findById(id)
                .filter(t -> t.getUser().getId().equals(user.getId()))
                .orElseThrow(() -> new RuntimeException("Transaction not found or unauthorized"));

        transaction.setAmount(request.getAmount());
        transaction.setDescription(request.getDescription());
        transaction.setType(request.getType());
        transaction.setCategory(request.getCategory());
        transaction.setDate(request.getDate());

        transactionRepository.save(transaction);
        return mapToResponse(transaction);
    }

    public void deleteTransaction(Long id, UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        Transaction transaction = transactionRepository.findById(id)
                .filter(t -> t.getUser().getId().equals(user.getId()))
                .orElseThrow(() -> new RuntimeException("Transaction not found or unauthorized"));

        transactionRepository.delete(transaction);
    }

    private TransactionResponse mapToResponse(Transaction transaction) {
        return TransactionResponse.builder()
                .id(transaction.getId())
                .amount(transaction.getAmount()) // BigDecimal ➝ works directly
                .description(transaction.getDescription())
                .type(transaction.getType().name()) // 🔥 convert enum to String
                .category(transaction.getCategory().name())
                .date(transaction.getDate())
                .build();
    }
}