package com.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capstoneproject.entity.Assignments;

@Repository
public interface AssignmentsRepository extends JpaRepository<Assignments, Long>{

    @Query("SELECT a FROM Assignments a WHERE a.complaintId = :complaintId")
    Assignments findByComplaintId(@Param("complaintId") Long complaintId);
}
