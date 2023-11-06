package com.capstoneproject.entity;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "table_supportteam")

public class SupportTeam  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teamId;
    private String teamName;
    private String password;

    // Getters and Setters

    public Long getTeamId() {
        return teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	@Override
	public String toString() {
		return "SupportTeam [teamId=" + teamId + ", teamName=" + teamName + ", password=" + password + "]";
	}

	public SupportTeam(Long teamId, String teamName, String password) {
		super();
		this.teamId = teamId;
		this.teamName = teamName;
		this.password = password;
	}
    
    // Constructors (if needed)
	 public SupportTeam() {
	    }
    
}