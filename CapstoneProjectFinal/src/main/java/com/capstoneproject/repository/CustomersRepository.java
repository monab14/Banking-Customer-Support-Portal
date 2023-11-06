package com.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capstoneproject.entity.Customers;

@Repository
public interface CustomersRepository extends JpaRepository<Customers, Long>{

    @Query("SELECT c FROM Customers c WHERE c.email = :email AND c.password = :password")
    Customers findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
