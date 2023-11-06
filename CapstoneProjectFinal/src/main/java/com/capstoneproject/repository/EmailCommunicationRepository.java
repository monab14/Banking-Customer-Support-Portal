package com.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstoneproject.entity.EmailCommunications;

@Repository
public interface EmailCommunicationRepository extends JpaRepository<EmailCommunications, Long>{

}