package com.capstoneproject.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "Complaints")
public class Complaint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "complaint_id")
    private Long complaintId;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customers customer;
    private String category;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime resolvedAt;


    // New field for complaint text
    @Column(name = "complaint_text")
    private String complaintText;
	
   

    public Long getComplaintId() {
        return complaintId;
    }

    public void setComplaintId(Long complaintId) {
        this.complaintId = complaintId;
    }

    public Customers getCustomer() {
        return customer;
    }

    public void setCustomer(Customers customer) {
        this.customer = customer;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getResolvedAt() {
        return resolvedAt;
    }

    public void setResolvedAt(LocalDateTime resolvedAt) {
        this.resolvedAt = resolvedAt;
    }

    // Getter and setter for complaintText
    public String getComplaintText() {
        return complaintText;
    }

    public void setComplaintText(String complaintText) {
        this.complaintText = complaintText;
    }

	@Override
	public String toString() {
		return "Complaint [complaintId=" + complaintId + ", customer=" + customer + ", category=" + category
				+ ", status=" + status + ", createdAt=" + createdAt + ", resolvedAt=" + resolvedAt + ", complaintText="
				+ complaintText + "]";
	}

	public Complaint(Long complaintId, Customers customer, String category, String status, LocalDateTime createdAt,
			LocalDateTime resolvedAt, String complaintText) {
		super();
		this.complaintId = complaintId;
		this.customer = customer;
		this.category = category;
		this.status = status;
		this.createdAt = createdAt;
		this.resolvedAt = resolvedAt;
		this.complaintText = complaintText;
	}

	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setResolvedAt(String resolvedAt2) {
		// TODO Auto-generated method stub
		
	}



    
    
    
}