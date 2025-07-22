package com.clarityledger.backend.category;

import com.clarityledger.backend.category.dto.CategoryRequest;
import com.clarityledger.backend.category.dto.CategoryResponse;
import com.clarityledger.backend.transaction.TransactionCategory;
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
public class CategoryService {

    private final CustomCategoryRepository customCategoryRepository;
    private final UserRepository userRepository;

    public void addCategory(CategoryRequest request, UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        CustomCategory category = CustomCategory.builder()
                .name(request.getName())
                .user(user)
                .build();

        customCategoryRepository.save(category);
    }

    public List<CategoryResponse> getAllCategories(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Predefined enums
        List<CategoryResponse> predefined = List.of(TransactionCategory.values()).stream()
                .map(c -> CategoryResponse.builder().name(c.name()).isCustom(false).build())
                .collect(Collectors.toList());

        // Custom categories
        List<CategoryResponse> custom = customCategoryRepository.findByUser(user).stream()
                .map(c -> CategoryResponse.builder().name(c.getName()).isCustom(true).build())
                .collect(Collectors.toList());

        predefined.addAll(custom);
        return predefined;
    }
}