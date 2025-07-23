package com.clarityledger.backend.category.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryResponse {
    private String name;
    private boolean isCustom;
}