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
public class EmailController {
	
	@Autowired
	public CustomersServiceImpl customersServiceImpl;
	
	@Autowired
	public TicketsServiceImpl ticketServiceImpl;
	
	@Autowired
	public EmailCommunicationServiceImpl emailCommunicationServiceImpl;
	

//	Add Emails to the table
	@PostMapping("/{customerId}/addemail")
	public EmailCommunications createEmail(@PathVariable(value = "customerId") long customerId,@Validated @RequestBody EmailCommunications e) {
		e.setCustomerid(String.valueOf(customerId)); 
		return emailCommunicationServiceImpl.save(e);
	}

//	Get all Email
	@GetMapping("/allemail")
	public List<EmailCommunications> getEmail() {
		return emailCommunicationServiceImpl.getEmail();
	}

// To Update Email
	@PutMapping("/{customerId}/email/{emailId}")
	public ResponseEntity<EmailCommunications> updateEmail(@PathVariable Long customerId,@PathVariable Long emailId, @Validated @RequestBody EmailCommunications updateEmail) {
		EmailCommunications existingEmail = emailCommunicationServiceImpl.findOne(emailId);
		existingEmail.setSubject(updateEmail.getSubject());
		existingEmail.setBody(updateEmail.getBody());
		existingEmail.setSentAt(updateEmail.getSentAt());
		
		EmailCommunications updated = emailCommunicationServiceImpl.save(existingEmail);
		return ResponseEntity.ok(updated);
	}

// To Delete a email
	@DeleteMapping("/{customerId}/email/{emailId}")
	public ResponseEntity<String> deleteEmail(@PathVariable(value = "customerId") long customerId,@PathVariable(value = "emailId") long emailId) {
		EmailCommunications theEmail = emailCommunicationServiceImpl.findOne(emailId);
		if (theEmail == null) {
			return ResponseEntity.notFound().build();
		}
		emailCommunicationServiceImpl.deleteOne(theEmail);
		return ResponseEntity.ok("Email deleted successfully.");
	}

// To Search email by Id
	@GetMapping("/{customerId}/email/{emailId}")
	public ResponseEntity<EmailCommunications> getEmailById(@PathVariable(value = "customerId") long customerId,@PathVariable Long emailId) {
		EmailCommunications email = emailCommunicationServiceImpl.findOne(emailId);
		return ResponseEntity.ok(email);
	}
	
}
