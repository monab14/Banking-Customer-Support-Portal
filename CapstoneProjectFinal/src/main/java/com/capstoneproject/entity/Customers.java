package com.capstoneproject.entity;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "table_customers")
public class Customers {

    public Customers() {
		
	}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
	private Long customerid;
	
    @Column(name = "first_name")
	private String firstName;
	
    @Column(name = "last_name")
	private String lastName;

    @Column(name = "email")
	private String email;
	
    @Column(name = "phone_number")
	private String phoneNumber;
	
    @Column(name = "aadhar_number")
	private String aadharNumber;
	
    @Column(name = "gender")
	private String gender;
	
    @Column(name = "password")
    private String password;

    public String getPassword() {
        return password;
    }

	@Column(name = "address")
	private String address;
    
	public void setPassword(String password) {
        this.password = password;
    }

//    private String hashPassword(String password) {
//        try {
//            MessageDigest md = MessageDigest.getInstance("SHA-256");
//            byte[] hashBytes = md.digest(password.getBytes());
//
//            StringBuilder sb = new StringBuilder();
//            for (byte b : hashBytes) {
//                sb.append(String.format("%02x", b));
//            }
//
//            return sb.toString();
//        } catch (NoSuchAlgorithmException e) {
//            e.printStackTrace();
//            return null; // Handle error appropriately
//        }
//    }

	public Long getCustomerid() {
		return customerid;
	}

	public void setCustomerid(Long customerid) {
		this.customerid = customerid;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Customers(Long customerid, String firstName, String lastName, String email, String phoneNumber,
            String aadharNumber, String gender, String address, String password) {
        super();
        this.customerid = customerid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.aadharNumber = aadharNumber;
        this.gender = gender;
        this.address = address;
        setPassword(password); // Hash the password when setting it
    }

}
