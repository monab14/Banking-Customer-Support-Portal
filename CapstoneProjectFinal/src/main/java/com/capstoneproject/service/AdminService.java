package com.capstoneproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.Admin;
import com.capstoneproject.repository.AdminRepository;

@Service

public class AdminService {
	
	 private final AdminRepository adminRepository;

	    @Autowired
	    public AdminService(AdminRepository adminRepository) {
	        this.adminRepository = adminRepository;
	    }

	    public Admin registerAdmin(Admin admin) {
	        // You should hash the password before saving it to the database for security reasons
	        return adminRepository.save(admin);
	    }

	    public Admin getAdminByUsername(String username) {
	        return adminRepository.findByUsername(username);
	    }

}
