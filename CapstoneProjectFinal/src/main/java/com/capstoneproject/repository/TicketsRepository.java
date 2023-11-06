package com.capstoneproject.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstoneproject.entity.Tickets;

@Repository
public interface TicketsRepository extends JpaRepository<Tickets, Long>{
	
	List<Tickets> findByCustomerid(String string);

}