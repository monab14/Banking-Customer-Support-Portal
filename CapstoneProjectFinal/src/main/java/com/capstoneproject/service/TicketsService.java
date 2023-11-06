package com.capstoneproject.service;



import java.util.List;

import com.capstoneproject.entity.Tickets;

public interface TicketsService {
	
	Tickets save(Tickets t);
	
	List<Tickets> getTickets();
	
	Tickets findOne(long ticketId);
	
	void deleteOne(Tickets theTickets);

}

