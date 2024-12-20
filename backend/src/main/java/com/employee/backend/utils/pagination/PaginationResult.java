package com.employee.backend.utils.pagination;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaginationResult<T> {
    private Paginator paginator;
    private List<T> items;

    public PaginationResult(Page<T> page) {
        items = page.getContent();
        paginator = new Paginator(page);

    }
}