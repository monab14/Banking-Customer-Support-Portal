package com.capstoneproject.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.Customers;
import com.capstoneproject.repository.CustomersRepository;


@Service
public class CustomersServiceImpl {
	
	@Autowired 
	private CustomersRepository customersRepository;

	public Customers save(Customers c) {
		return customersRepository.save(c);
	}

	public List<Customers> getCustomers() {
		return customersRepository.findAll();
	}
	
	public Customers findOne(long customerId) {
		return customersRepository.findById(customerId).orElse(null);
	}

	public Customers findByEmailAndPassword (String email, String password) throws Exception {
		Customers customers = customersRepository.findByEmailAndPassword(email,password);
		if(customers != null){
			return customers;
		}else{
			throw new Exception("Not found");
		}
	}
	
	public void deleteOne(Customers theCustomers) {
		customersRepository.delete(theCustomers);
		
	}

}
