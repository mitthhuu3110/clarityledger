package com.clarityledger.backend.transaction;

import com.clarityledger.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    // Fetch all transactions for a specific user
    List<Transaction> findByUser(User user);

    // Optionally: filter by type
    List<Transaction> findByUserAndType(User user, TransactionType type);

    // Optionally: filter by category
    List<Transaction> findByUserAndCategory(User user, TransactionCategory category);
}