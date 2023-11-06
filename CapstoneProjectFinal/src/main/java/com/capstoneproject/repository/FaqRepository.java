package com.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstoneproject.entity.Faq;

@Repository
public interface FaqRepository extends JpaRepository<Faq, Integer> {

    // You can add custom query methods here if needed.
    // For example, if you want to find FAQs by a specific category or topic.

}
