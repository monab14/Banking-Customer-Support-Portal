package com.capstoneproject.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.capstoneproject.entity.*;
import com.capstoneproject.service.impl.*;
import com.capstoneproject.service.impl.EmailCommunicationServiceImpl;
import com.capstoneproject.service.impl.TicketsServiceImpl;


@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class CustomersController {
	
	@Autowired
	public CustomersServiceImpl customersServiceImpl;
	
	@Autowired
	public TicketsServiceImpl ticketServiceImpl;
	
	@Autowired
	public EmailCommunicationServiceImpl emailCommunicationServiceImpl;
	
//	For debugging purpose
	@PostMapping("/login")
	public Customers returnString(@RequestBody Map<String, String> requestBody) throws Exception{
		String email = requestBody.get("email");
		String password = requestBody.get("password");
		return customersServiceImpl.findByEmailAndPassword(email, password);
	}

//	Add Customers to the table
	@PostMapping("/addcustomer")
	public Customers createCustomers(@Validated @RequestBody Customers c) {
		return customersServiceImpl.save(c);
	}

//	Get all Customers
	@GetMapping("/allcustomer")
	public List<Customers> getCustomers() {
		return customersServiceImpl.getCustomers();
	}

// To Update Customer
	@PutMapping("/customer/{customerId}")
	public ResponseEntity<Customers> updateCustomer(@PathVariable Long customerId, @Validated @RequestBody Customers updateCustomer) {
		
		Customers existingCustomer = customersServiceImpl.findOne(customerId);
		System.out.println(existingCustomer);
		if(updateCustomer.getFirstName() != null) existingCustomer.setFirstName(updateCustomer.getFirstName());
		if(updateCustomer.getLastName() != null) existingCustomer.setLastName(updateCustomer.getLastName());
		if(updateCustomer.getEmail() != null) existingCustomer.setEmail(updateCustomer.getEmail());
		if(updateCustomer.getPhoneNumber() != null) existingCustomer.setPhoneNumber(updateCustomer.getPhoneNumber());
		if(updateCustomer.getAadharNumber() != null) existingCustomer.setAadharNumber(updateCustomer.getAadharNumber());
		if(updateCustomer.getGender() != null) existingCustomer.setGender(updateCustomer.getGender());
		if(updateCustomer.getAddress() != null) existingCustomer.setAddress(updateCustomer.getAddress());

		Customers updated = customersServiceImpl.save(existingCustomer);
		return ResponseEntity.ok(updated);
	}

// To Delete a customer
	@DeleteMapping("/customer/{customerId}")
	public ResponseEntity<String> deleteCustomer(@PathVariable(value = "customerId") long customerId) {
		Customers theCustomers = customersServiceImpl.findOne(customerId);
		if (theCustomers == null) {
			return ResponseEntity.notFound().build();
		}
		customersServiceImpl.deleteOne(theCustomers);
		return ResponseEntity.ok("Customer deleted successfully.");
	}

// To Search customer by Id
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<Customers> getCustomerById(@PathVariable Long customerId) {
		Customers customer = customersServiceImpl.findOne(customerId);
		return ResponseEntity.ok(customer);
	}
}
