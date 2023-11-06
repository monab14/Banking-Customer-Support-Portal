package com.capstoneproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "table_emailcommunications")
public class EmailCommunications {
	
    public EmailCommunications() {
		
	}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "email_id")
	private Long emailid;
	
    @Column(name = "customer_id")
	private String customerid;
	
    @Column(name = "subject")
	private String subject;
	
    @Column(name = "body")
	private String body;
	
    @Column(name = "sent_at")
	private String sentAt;

	public String getSentAt() {
		return sentAt;
	}

	public void setSentAt(String sentAt) {
		this.sentAt = sentAt;
	}

	public Long getEmailid() {
		return emailid;
	}

	public void setEmailid(Long emailid) {
		this.emailid = emailid;
	}

	public String getCustomerid() {
		return customerid;
	}

	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public EmailCommunications(Long emailid, String customerid, String subject, String body, String sentAt) {
		super();
		this.emailid = emailid;
		this.customerid = customerid;
		this.subject = subject;
		this.body = body;
		this.sentAt = sentAt;
	}

}
