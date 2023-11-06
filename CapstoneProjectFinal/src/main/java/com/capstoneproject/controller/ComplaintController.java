package com.capstoneproject.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.capstoneproject.report.CsvExporter;
import com.capstoneproject.entity.Complaint;
import com.capstoneproject.entity.Customers;
import com.capstoneproject.report.FileExporter;
import com.capstoneproject.service.ComplaintService;
import com.capstoneproject.report.ExcelExporter;
@RestController
@RequestMapping("/complaints")
@CrossOrigin("http://localhost:3000")
public class ComplaintController {
	
	private ComplaintService complaintService;
	
	    @Autowired
	    public ComplaintController(ComplaintService complaintService) {
	        this.complaintService = complaintService;
	    }
	 
	 // Create a new complaint
	    @PostMapping("/create")
	    public Complaint createComplaint(@RequestBody Complaint complaint) {
	        return complaintService.createComplaint(complaint);
	    }
	    @GetMapping("/customer/{customerId}")
	    public List<Complaint> getComplaintsByCustomer(@PathVariable Long customerId) {
	        Customers customer = new Customers();
	        customer.setCustomerid(customerId); // Assuming you have a method to find a customer by ID in your CustomerService
	        return complaintService.getComplaintsByCustomer(customer);
	    }
	 // Read a complaint by ID
	    @GetMapping("/complaint/{complaintId}")
	    public ResponseEntity<Object> getComplaintById(@PathVariable Long complaintId) {
	        //return complaintService.getComplaintById(complaintId);
	    	 Optional<Complaint> complaintOptional = complaintService.getComplaintById(complaintId);
	         
	         if (complaintOptional.isPresent()) {
	             Complaint complaint = complaintOptional.get();
	             return ResponseEntity.ok(complaint);
	         } else {
	             return ResponseEntity.notFound().build();
	         }
	    }
	   // end point to generate pdf
	    @GetMapping("/complaint/{complaintId}/exportPdf")
	    public void exportComplaintToPdf(@PathVariable Long complaintId, HttpServletResponse response) {
	        Optional<Complaint> complaintOptional = complaintService.getComplaintById(complaintId);

	        if (complaintOptional.isPresent()) {
	            Complaint complaint = complaintOptional.get();
	            try {
	                FileExporter.exportComplaintToPdf(complaint, response);
	            } catch (Exception e) {
	                // Handle exceptions
	            }
	        } else {
	            // Handle case where complaint is not found
	        }
	    }
//end point to generate CSV File
	    @GetMapping("/complaint/{complaintId}/export/csv")
	    public void exportComplaintToCsv(@PathVariable Long complaintId, HttpServletResponse response) {
	        Optional<Complaint> complaintOptional = complaintService.getComplaintById(complaintId);

	        if (complaintOptional.isPresent()) {
	            Complaint complaint = complaintOptional.get();
	            try {
	                CsvExporter.exportComplaintToCsv(complaint, response);
	            } catch (Exception e) {
	                // Handle exceptions
	            }
	        } else {
	            // Handle case where complaint is not found
	        }
	    }
	  //end point to generate Excel File
	    @GetMapping("/complaint/{complaintId}/export/excel")
	    public void exportComplaintToExcel(@PathVariable Long complaintId, HttpServletResponse response) {
	        Optional<Complaint> complaintOptional = complaintService.getComplaintById(complaintId);

	        if (complaintOptional.isPresent()) {
	            Complaint complaint = complaintOptional.get();
	            try {
	                ExcelExporter.exportComplaintToExcel(complaint, response);
	            } catch (Exception e) {
	                // Handle exceptions
	            }
	        } else {
	            // Handle case where complaint is not found
	        }
	    }

	 // Read all complaints
	    @GetMapping("/all")
	    public List<Complaint> getAllComplaints() {
	        return complaintService.getAllComplaints();
	    }
	    
	 // Update a complaint
	    @PutMapping("/update/{complaintId}")
	    public Complaint updateComplaint(@PathVariable Long complaintId, @RequestBody Complaint updatedComplaint) {
	        return complaintService.updateComplaint(complaintId, updatedComplaint);
	    }
	 //
	    @PutMapping("/updateStatus/{complaintId}")
	    public ResponseEntity<Complaint> updateComplaintStatus(
	        @PathVariable Long complaintId,
	        @RequestBody Map<String, String> statusMap
	    ) {
	        Optional<Complaint> complaintOptional = complaintService.getComplaintById(complaintId);

	        if (complaintOptional.isPresent()) {
	            String newStatus = statusMap.get("status");
	            String resolvedAt = statusMap.get("resolvedAt");

	            Complaint updatedComplaint = complaintService.updateStatus(complaintId, newStatus, resolvedAt);
	            return ResponseEntity.ok(updatedComplaint);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }


	 // Delete a complaint
	    @DeleteMapping("/delete/{complaintId}")
	    public void deleteComplaint(@PathVariable Long complaintId) {
	        complaintService.deleteComplaint(complaintId);
	    }
}