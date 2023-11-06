package com.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capstoneproject.entity.SupportTeam;

@Repository
public interface SupportTeamRepository extends JpaRepository<SupportTeam, Long> {
    // Custom query methods (if needed)
	
	 SupportTeam findByTeamName(String teamName);

	@Query("SELECT t FROM SupportTeam t WHERE t.teamName = :teamName AND t.password = :password")
	 SupportTeam findByNameAndPassword(@Param("teamName") String teamName,@Param("password") String password);
}