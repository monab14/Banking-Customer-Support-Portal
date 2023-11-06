package com.capstoneproject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.Complaint;
import com.capstoneproject.entity.Customers;
import com.capstoneproject.repository.ComplaintRepository;


@Service

public class ComplaintService {
	 private  ComplaintRepository complaintRepository;
	 
	 @Autowired
	    public ComplaintService(ComplaintRepository complaintRepository) {
	        this.complaintRepository = complaintRepository;
	    }
	 
	// Create a new complaint
	    public Complaint createComplaint(Complaint complaint) {
	        return complaintRepository.save(complaint);
	    }
	    
	 // Read a complaint by ID
	    public Optional<Complaint> getComplaintById(Long complaintId) {
	        return complaintRepository.findById(complaintId);
	    }
	    
	 // Read all complaints
	    public List<Complaint> getAllComplaints() {
	        return (List<Complaint>) complaintRepository.findAll();
	    }
	    
	 // Update a complaint
	    public Complaint updateComplaint(Long complaintId, Complaint updatedComplaint) {
	        Optional<Complaint> existingComplaint = complaintRepository.findById(complaintId);
	        if (existingComplaint.isPresent()) {
	            updatedComplaint.setComplaintId(complaintId);
	            return complaintRepository.save(updatedComplaint);
	        }
	        return null;
	        
	    }
	    
	 // Update a complaint
	    public Complaint updateStatus(Long complaintId, String newStatus, String resolvedAt) {
	        Optional<Complaint> existingComplaint = complaintRepository.findById(complaintId);

	        if (existingComplaint.isPresent()) {
	            Complaint complaint = existingComplaint.get();
	            complaint.setStatus(newStatus); // Set the new status
	            complaint.setResolvedAt(resolvedAt); // Set the resolvedAt

	            return complaintRepository.save(complaint);
	        }

	        return null; // You might want to consider throwing an exception if the complaint is not found
	    }


	    
	 // Delete a complaint
	    public void deleteComplaint(Long complaintId) {
	        complaintRepository.deleteById(complaintId);
	    }
	    public List<Complaint> getComplaintsByCustomer(Customers customer) {
	        return complaintRepository.findByCustomer(customer);
	    }
}