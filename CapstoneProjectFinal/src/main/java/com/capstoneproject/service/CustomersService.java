package com.capstoneproject.service;

import java.util.List;

import com.capstoneproject.entity.Customers;

public interface CustomersService {
	
	Customers save(Customers c);
	
	List<Customers> getCustomers();
	
	Customers findOne(long customerId);

	Customers findByEmailAndPassword(String Email, String Password);
	
	void deleteOne(Customers theCustomers);
}
