package com.capstoneproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.capstoneproject.entity.SupportTeam;
import com.capstoneproject.service.SupportTeamService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/teams")
@CrossOrigin("http://localhost:3000")
public class SupportTeamController {

    @Autowired
    private SupportTeamService teamService;

    @GetMapping("/all")
    public List<SupportTeam> getAllTeams() {
        return teamService.getAllTeams();
    }

    @GetMapping("/{id}")
    public SupportTeam getTeamById(@PathVariable Long id) {
        return teamService.getTeamById(id);
    }

    @PostMapping("/create")
    public SupportTeam saveTeam(@RequestBody Map<String,String> team) {
        String name = team.get("teamName");
        String password = team.get("password");
        return teamService.findByNameAndPassword(name, password);
    }

    @PutMapping("/{id}")
    public SupportTeam updateTeam(@PathVariable Long id, @RequestBody SupportTeam team) {
        return teamService.updateTeam(id, team);
    }

    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable Long id) {
        teamService.deleteTeam(id);
    }
}