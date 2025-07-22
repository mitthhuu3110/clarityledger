package com.clarityledger.backend.transaction;

import com.clarityledger.backend.user.User;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal amount;

    private String description;

    private String type;

    private String category;

    private LocalDate date;  // 🧠 This is the missing piece!

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}