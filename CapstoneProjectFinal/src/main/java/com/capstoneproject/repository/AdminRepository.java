package com.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstoneproject.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

	Admin findByUsername(String username);

}
