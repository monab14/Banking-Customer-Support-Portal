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

import com.capstoneproject.entity.Assignments;
import com.capstoneproject.entity.SupportTeam;
import com.capstoneproject.service.impl.*;
import com.capstoneproject.service.SupportTeamService;


@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class AssignmentController {
	
	@Autowired
	public CustomersServiceImpl customersServiceImpl;
	
	@Autowired
	public TicketsServiceImpl ticketServiceImpl;
	
	@Autowired
	public EmailCommunicationServiceImpl emailCommunicationServiceImpl;
	
	@Autowired
	public AssignmentsServiceImpl assignmentsServiceImpl;
	
	@Autowired
	public SupportTeamService SupportTeamService;
	
//	Add Assignment to the table
	@PostMapping("/addassignment")
	public Assignments createAssignments(@Validated @RequestBody Assignments a) {
		return assignmentsServiceImpl.save(a);
	}

//	Get all Assignments
	@GetMapping("/allassignment")
	public List<Assignments> getAssignments() {
		return assignmentsServiceImpl.getAssignments();
	}

// To Update Assignment
	@PutMapping("/assignment/{assignmentId}")
	public ResponseEntity<Assignments> updateAssignment(@PathVariable Long assignmentId, @Validated @RequestBody Assignments updateAssignment) {
		Assignments existingAssignment = assignmentsServiceImpl.findOne(assignmentId);
		existingAssignment.setAssignedAt(updateAssignment.getAssignedAt());
		existingAssignment.setStatus(updateAssignment.getStatus());

		Assignments updated = assignmentsServiceImpl.save(existingAssignment);
		return ResponseEntity.ok(updated);
	}

// To Delete a Assignment
	@DeleteMapping("/assignment/{assignmentId}")
	public ResponseEntity<String> deleteAssignment(@PathVariable(value = "assignmentId") long assignmentId) {
		Assignments theAssignments = assignmentsServiceImpl.findOne(assignmentId);
		if (theAssignments == null) {
			return ResponseEntity.notFound().build();
		}
		assignmentsServiceImpl.deleteOne(theAssignments);
		return ResponseEntity.ok("Assignments deleted successfully.");
	}

// To Search Assignment by Id
	@GetMapping("/assignment/{assignmentId}")
	public ResponseEntity<Assignments> getAssignmentById(@PathVariable Long assignmentId) {
		Assignments assignment = assignmentsServiceImpl.findOne(assignmentId);
		return ResponseEntity.ok(assignment);
	}

	@GetMapping("/assignment/customer/assignment/{complaintId}")
	public Assignments getAssignmentByComplaintId(@PathVariable Long complaintId){
		return assignmentsServiceImpl.findByComplaintId(complaintId);
	}

	@PostMapping("/assign/{complaintId}/{teamId}")
	public Assignments assignComplaint(
	    @PathVariable Long complaintId, 
	    @PathVariable Long teamId) {

	    Assignments assignment = new Assignments();
	    assignment.setComplaintId(complaintId);
		assignment.setTeamId(teamId);
	    return assignmentsServiceImpl.saveAssignment(assignment);
	}
}

	
	