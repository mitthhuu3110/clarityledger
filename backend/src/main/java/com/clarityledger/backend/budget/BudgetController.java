package com.clarityledger.backend.budget;

import com.clarityledger.backend.budget.dto.BudgetRequest;
import com.clarityledger.backend.budget.dto.BudgetResponse;
import com.clarityledger.backend.budget.dto.BudgetSummaryResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budgets")
@RequiredArgsConstructor
public class BudgetController {

    private final BudgetService budgetService;

    @PostMapping
    public BudgetResponse createBudget(@Valid @RequestBody BudgetRequest request,
                                       @AuthenticationPrincipal UserDetails userDetails) {
        return budgetService.createBudget(request, userDetails);
    }

    @GetMapping
    public List<BudgetResponse> getBudgets(@AuthenticationPrincipal UserDetails userDetails) {
        return budgetService.getAllBudgets(userDetails);
    }

    @PutMapping("/{id}")
    public BudgetResponse updateBudget(@PathVariable Long id,
                                       @Valid @RequestBody BudgetRequest request,
                                       @AuthenticationPrincipal UserDetails userDetails) {
        return budgetService.updateBudget(id, request, userDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteBudget(@PathVariable Long id,
                             @AuthenticationPrincipal UserDetails userDetails) {
        budgetService.deleteBudget(id, userDetails);
    }

    @GetMapping("/summary")
    public BudgetSummaryResponse getBudgetSummary(@AuthenticationPrincipal UserDetails userDetails) {
        return budgetService.getBudgetSummary(userDetails);
    }
}