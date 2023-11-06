package com.capstoneproject.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.EmailCommunications;
import com.capstoneproject.repository.EmailCommunicationRepository;



@Service
public class EmailCommunicationServiceImpl {
	
	@Autowired 
	private EmailCommunicationRepository emailCommunicationRepository;

	public EmailCommunications save(EmailCommunications e) {
		return emailCommunicationRepository.save(e);
	}

	public List<EmailCommunications> getEmail() {
		return emailCommunicationRepository.findAll();
	}
	
	public EmailCommunications findOne(long emailId) {
		return emailCommunicationRepository.findById(emailId).orElse(null);
	}
	
	public void deleteOne(EmailCommunications theEmail) {
		emailCommunicationRepository.delete(theEmail);
		
	}

}
