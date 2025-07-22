package com.clarityledger.backend.transaction;

import com.clarityledger.backend.transaction.dto.TransactionRequest;
import com.clarityledger.backend.transaction.dto.TransactionResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping
    public ResponseEntity<TransactionResponse> createTransaction(
            @RequestBody @Valid TransactionRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {
        TransactionResponse response = transactionService.createTransaction(request, userDetails);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<TransactionResponse>> getAllTransactions(
            @AuthenticationPrincipal UserDetails userDetails) {
        List<TransactionResponse> transactions = transactionService.getAllTransactions(userDetails);
        return ResponseEntity.ok(transactions);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransactionResponse> updateTransaction(
            @PathVariable Long id,
            @RequestBody @Valid TransactionRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {
        TransactionResponse response = transactionService.updateTransaction(id, request, userDetails);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        transactionService.deleteTransaction(id, userDetails);
        return ResponseEntity.noContent().build();
    }
}