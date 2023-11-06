package com.capstoneproject.impl.test;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.anyLong;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.capstoneproject.entity.Customers;
import com.capstoneproject.repository.CustomersRepository;
import com.capstoneproject.service.impl.CustomersServiceImpl;

@SpringBootTest
public class CustomersServiceImplTest {

    @Mock
    private CustomersRepository customersRepository;

    @InjectMocks
    private CustomersServiceImpl customersService;

    @Test
    public void testSaveCustomer() {
        Customers customerToSave = new Customers(1L, "John", "Doe", "john.doe@example.com", "123456789", "123456789012", "Male", "123 Main St", null);

        when(customersRepository.save(customerToSave)).thenReturn(customerToSave);

        Customers savedCustomer = customersService.save(customerToSave);

        Assertions.assertNotNull(savedCustomer);
        Assertions.assertEquals("John", savedCustomer.getFirstName());
        
    }

    @Test
    public void testGetCustomers() {
        List<Customers> customersList = new ArrayList<>();
        customersList.add(new Customers(1L, "John", "Doe", "john.doe@example.com", "123456789", "123456789012", "Male", "123 Main St", null));
        customersList.add(new Customers(2L, "Jane", "Doe", "jane.doe@example.com", "987654321", "098765432109", "Female", "456 Oak Dr", null));

        when(customersRepository.findAll()).thenReturn(customersList);

        List<Customers> result = customersService.getCustomers();

        Assertions.assertNotNull(result);
        Assertions.assertEquals(2, result.size());

        Assertions.assertEquals("John", result.get(0).getFirstName());
        
    }

    @Test
    public void testFindOneCustomer() {
        long customerId = 1L;
        Customers customer = new Customers(customerId, "John", "Doe", "john.doe@example.com", "123456789", "123456789012", "Male", "123 Main St", null);

        when(customersRepository.findById(anyLong())).thenReturn(Optional.of(customer));

        Customers result = customersService.findOne(customerId);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(customerId, result.getCustomerid());
        Assertions.assertEquals("John", result.getFirstName());
        
    }

    @Test
    public void testDeleteCustomer() {
        long customerId = 1L;
        Customers customer = new Customers(customerId, "John", "Doe", "john.doe@example.com", "123456789", "123456789012", "Male", "123 Main St", null);

        customersService.deleteOne(customer);

        verify(customersRepository).delete(customer);
    }
}
