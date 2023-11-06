package com.capstoneproject.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.capstoneproject.entity.Complaint;
import com.capstoneproject.entity.Customers;

public interface ComplaintRepository extends JpaRepository<Complaint, Long>{

	List<Complaint> findByCustomerId(Long customerId);
	
	List<Complaint> findByCustomer(Customers customer);



}
