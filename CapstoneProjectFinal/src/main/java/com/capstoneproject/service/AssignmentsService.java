package com.capstoneproject.service;

import java.util.List;

import com.capstoneproject.entity.Assignments;interface AssignmentsService {
	
	Assignments save(Assignments a);
	
	List<Assignments> getAssignments();
	
	Assignments findOne(long assignmentId);
	
	void deleteOne(Assignments theAssignments);

}
