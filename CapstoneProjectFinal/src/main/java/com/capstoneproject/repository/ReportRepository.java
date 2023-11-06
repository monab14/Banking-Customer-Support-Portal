package com.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstoneproject.entity.Report;

public interface ReportRepository extends JpaRepository<Report, Integer> {
    // You can add custom queries if needed
}

