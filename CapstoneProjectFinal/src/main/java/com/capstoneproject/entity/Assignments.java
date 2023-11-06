package com.capstoneproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity
@Table(name = "table_assignments")
public class Assignments {
	
    public Assignments() {
		
	}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignment_id")
	private Long assignmentId;
	
    @Column(name = "complaint_id")
	private Long complaintId;
	
    @Column(name = "team_id")
	private Long teamId;
	
    @Column(name = "assigned_at")
	private String assignedAt;
    
    @Column(name = "status")
	private String status;

	public Long getAssignmentId() {
		return assignmentId;
	}

	public void setAssignmentId(Long assignmentId) {
		this.assignmentId = assignmentId;
	}

	public Long getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(Long complaintId) {
		this.complaintId = complaintId;
	}

	public Long getTeamId() {
		return teamId;
	}

	public void setTeamId(Long teamId) {
		this.teamId = teamId;
	}

	public String getAssignedAt() {
		return assignedAt;
	}

	public void setAssignedAt(String assignedAt) {
		this.assignedAt = assignedAt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Assignments(Long assignmentId, Long complaintId, Long teamId, String assignedAt, String status,
			SupportTeam supportTeam) {
		super();
		this.assignmentId = assignmentId;
		this.complaintId = complaintId;
		this.teamId = teamId;
		this.assignedAt = assignedAt;
		this.status = status;
	}
}