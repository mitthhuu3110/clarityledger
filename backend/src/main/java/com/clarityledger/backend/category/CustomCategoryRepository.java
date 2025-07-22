package com.clarityledger.backend.category;

import com.clarityledger.backend.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomCategoryRepository extends JpaRepository<CustomCategory, Long> {
    List<CustomCategory> findByUser(User user);
}