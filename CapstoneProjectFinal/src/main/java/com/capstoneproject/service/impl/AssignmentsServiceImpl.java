package com.capstoneproject.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.Assignments;
import com.capstoneproject.repository.AssignmentsRepository;

@Service
public class AssignmentsServiceImpl {
	
	@Autowired 
	private AssignmentsRepository assignmentsRepository;

	public Assignments save(Assignments a) {
		return assignmentsRepository.save(a);
	}

	public List<Assignments> getAssignments() {
		return assignmentsRepository.findAll();
	}
	
	public Assignments findOne(long assignmentId) {
		return assignmentsRepository.findById(assignmentId).orElse(null);
	}
	
	public void deleteOne(Assignments theAssignments) {
		assignmentsRepository.delete(theAssignments);
		
	}
	public Assignments findByComplaintId(Long complaintId) {
		return assignmentsRepository.findByComplaintId(complaintId);
	}
	public Assignments saveAssignment(Assignments assignment) {
        return assignmentsRepository.save(assignment);
    }

}