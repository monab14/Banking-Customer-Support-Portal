package com.capstoneproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "table_tickets")
public class Tickets {
	
    public Tickets() {
		
	}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticket_id")
	private Long ticketid;
	
    @Column(name = "customer_id")
	private String customerid;
	
    @Column(name = "query")
	private String query;
	
    @Column(name = "status")
	private String status;
	
    @Column(name = "created_at")
	private String createdAt;
	
    @Column(name = "resolved_at")
	private String resolvedAt;

	public Long getTicketid() {
		return ticketid;
	}

	public void setTicketid(Long ticketid) {
		this.ticketid = ticketid;
	}

	public String getCustomerid() {
		return customerid;
	}

	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCreatedat() {
		return createdAt;
	}

	public void setCreatedat(String createdat) {
		this.createdAt = createdat;
	}

	public String getResolvedAt() {
		return resolvedAt;
	}

	public void setResolved_at(String resolved_at) {
		this.resolvedAt = resolved_at;
	}

	public Tickets(Long ticketid, String customerid, String query, String status, String createdAt,
			String resolvedAt) {
		super();
		this.ticketid = ticketid;
		this.customerid = customerid;
		this.query = query;
		this.status = status;
		this.createdAt = createdAt;
		this.resolvedAt = resolvedAt;
	}
}
