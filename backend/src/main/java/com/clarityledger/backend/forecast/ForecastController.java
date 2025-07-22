package com.clarityledger.backend.forecast;

import com.clarityledger.backend.forecast.dto.ForecastResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/forecast")
@RequiredArgsConstructor
public class ForecastController {

    private final ForecastService forecastService;

    @GetMapping
    public ForecastResponse getForecast(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "3") int months
    ) {
        return forecastService.predictNextMonthExpense(userDetails, months);
    }
}