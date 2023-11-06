package com.capstoneproject.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.Tickets;
import com.capstoneproject.repository.TicketsRepository;


@Service
public class TicketsServiceImpl {
	
	@Autowired 
	private TicketsRepository ticketsRepository;

	public Tickets save(Tickets t) {
		return ticketsRepository.save(t);
	}
	
	public List<Tickets> getTickets() {
		return ticketsRepository.findAll();
	}

	public Tickets findOne(long ticketId) {
		return ticketsRepository.findById(ticketId).orElse(null);
	}
	
	public void deleteOne(Tickets theTickets) {
		ticketsRepository.delete(theTickets);
		
	}
	public List<Tickets> findByCustomerId(Long customerId) {
	    return ticketsRepository.findByCustomerid(customerId.toString());
	}
	

}