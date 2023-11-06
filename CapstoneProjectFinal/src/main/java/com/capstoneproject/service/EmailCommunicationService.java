package com.capstoneproject.service;

import java.util.List;

import com.capstoneproject.entity.EmailCommunications;

public interface EmailCommunicationService {
	
	EmailCommunications save(EmailCommunications e);
	
	List<EmailCommunications> getEmail();
	
	EmailCommunications findOne(long emailId);
	
	void deleteOne(EmailCommunications theEmail);

}
