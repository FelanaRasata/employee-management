package com.employee.backend.utils.pagination;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;

/**
 * Classe qui contient les éléments de la pagination d'une liste
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Paginator {

    private long totalItems;

    private int itemsPerPage;

    private int page;

    private int totalPages;

    private int prevPage;

    private int nextPage;

    private boolean hasNextPage;

    private boolean hasPrevPage;

    private int offset;

    public Paginator(Page page) {
        this.totalItems = page.getTotalElements();
        this.itemsPerPage = page.getSize();
        this.totalPages = page.getTotalPages();
        this.page = page.getNumber() + 1;
        this.prevPage = page.getNumber() - 1;
        this.nextPage = page.getNumber() + 1;
        this.hasPrevPage = !page.isFirst();
        this.hasNextPage = !page.isLast();
        this.offset = page.getNumber() * itemsPerPage;
    }
}