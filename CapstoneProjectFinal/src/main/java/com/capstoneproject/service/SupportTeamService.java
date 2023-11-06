package com.capstoneproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.SupportTeam;
import com.capstoneproject.repository.SupportTeamRepository;

@Service

public class SupportTeamService {
	
	private final SupportTeamRepository supportTeamRepository;

    @Autowired
    public SupportTeamService(SupportTeamRepository supportTeamRepository) {
        this.supportTeamRepository = supportTeamRepository;
    }

    public List<SupportTeam> getAllTeams() {
        return supportTeamRepository.findAll();
    }

    public SupportTeam saveTeam(SupportTeam team) {
        return supportTeamRepository.save(team);
    }

    public SupportTeam getTeamById(Long id) {
        return supportTeamRepository.findById(id).orElse(null);
    }

	public void deleteTeam(Long id) {
		// TODO Auto-generated method stub
		
		
	}
	public SupportTeam updateTeam(Long id, SupportTeam updatedTeam) {
	    SupportTeam existingTeam = supportTeamRepository.findById(id)
	            .orElseThrow(null);

	    existingTeam.setTeamName(updatedTeam.getTeamName());
	    existingTeam.setPassword(updatedTeam.getPassword());

	    return supportTeamRepository.save(existingTeam);
	}
	
	public SupportTeam getTeamByName(String teamName) {
        // Implement the logic to retrieve a SupportTeam by teamName
        return supportTeamRepository.findByTeamName(teamName);
    }

    public SupportTeam findByNameAndPassword(String teamName, String password){
        return supportTeamRepository.findByNameAndPassword(teamName,password);
    }
}