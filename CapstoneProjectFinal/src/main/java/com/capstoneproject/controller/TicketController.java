package com.capstoneproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstoneproject.entity.*;
import com.capstoneproject.service.impl.*;
import com.capstoneproject.service.impl.EmailCommunicationServiceImpl;
import com.capstoneproject.service.impl.TicketsServiceImpl;


@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class TicketController {
	
	@Autowired
	public CustomersServiceImpl customersServiceImpl;
	
	@Autowired
	public TicketsServiceImpl ticketServiceImpl;
	
	@Autowired
	public EmailCommunicationServiceImpl emailCommunicationServiceImpl;
	

//	Add Ticket to the table
	@PostMapping("/{customerId}/addticket")
	public Tickets createTickets(@PathVariable(value = "customerId") long customerId, @Validated @RequestBody Tickets t) {
	    t.setCustomerid(String.valueOf(customerId)); 
	    return ticketServiceImpl.save(t);
	}

//	Get all Tickets
	@GetMapping("/allticket")
	public List<Tickets> getTickets() {
		return ticketServiceImpl.getTickets();
	}

// To Update Ticket
	@PutMapping("/{customerId}/ticket/{ticketId}")
	public ResponseEntity<Tickets> updateTicket(@PathVariable Long customerId,@PathVariable Long ticketId, @Validated @RequestBody Tickets updateTicket) {
		Tickets existingTicket = ticketServiceImpl.findOne(ticketId);
		existingTicket.setQuery(updateTicket.getQuery());
		existingTicket.setStatus(updateTicket.getStatus());
		existingTicket.setCreatedat(updateTicket.getCreatedat());
		Tickets updated = ticketServiceImpl.save(existingTicket);
		return ResponseEntity.ok(updated);
	}

// To Delete a ticket
	@DeleteMapping("/{customerId}/ticket/{ticketId}")
	public ResponseEntity<String> deleteTicket(@PathVariable(value = "customerId") long customerId,@PathVariable(value = "ticketId") long ticketId) {
		Tickets theTickets = ticketServiceImpl.findOne(ticketId);
		if (theTickets == null) {
			return ResponseEntity.notFound().build();
		}
		ticketServiceImpl.deleteOne(theTickets);
		return ResponseEntity.ok("Ticket deleted successfully.");
	}

// To Search Ticket by Id
	@GetMapping("/{customerId}/ticket/{ticketId}")
	public ResponseEntity<Tickets> getTicketById(@PathVariable Long customerId,@PathVariable Long ticketId) {
		Tickets ticket = ticketServiceImpl.findOne(ticketId);
		return ResponseEntity.ok(ticket);
	}
	// To search Ticket by customer Id
	@GetMapping("/{customerId}/tickets")
	  public ResponseEntity<List<Tickets>> getTicketsByCustomerId(@PathVariable Long customerId) {
	        List<Tickets> tickets = ticketServiceImpl.findByCustomerId(customerId);
	        return ResponseEntity.ok(tickets);
	    }
	
}