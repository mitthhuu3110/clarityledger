package com.clarityledger.backend.category;

import com.clarityledger.backend.category.dto.CategoryRequest;
import com.clarityledger.backend.category.dto.CategoryResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    public void addCategory(@RequestBody CategoryRequest request,
                            @AuthenticationPrincipal UserDetails userDetails) {
        categoryService.addCategory(request, userDetails);
    }

    @GetMapping
    public List<CategoryResponse> getAllCategories(@AuthenticationPrincipal UserDetails userDetails) {
        return categoryService.getAllCategories(userDetails);
    }
}