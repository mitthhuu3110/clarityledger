package com.clarityledger.backend.dashboard;

import com.clarityledger.backend.dashboard.dto.DashboardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping
    public DashboardResponse getDashboard(@AuthenticationPrincipal UserDetails userDetails) {
        return dashboardService.getDashboard(userDetails);
    }
}