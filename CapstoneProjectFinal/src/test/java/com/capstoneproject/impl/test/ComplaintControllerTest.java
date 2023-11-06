package com.capstoneproject.impl.test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.capstoneproject.controller.ComplaintController;
import com.capstoneproject.entity.Complaint;
import com.capstoneproject.entity.Customers;
import com.capstoneproject.service.ComplaintService;

@SpringBootTest
public class ComplaintControllerTest {

    @Mock
    private ComplaintService complaintService;

    @InjectMocks
    private ComplaintController complaintController;

    @SuppressWarnings("deprecation")
	@BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testCreateComplaint() {
        Complaint newComplaint = new Complaint(1L, new Customers(), "Category", "Open", LocalDateTime.now(), null, "New Complaint Text");
        when(complaintService.createComplaint(newComplaint)).thenReturn(newComplaint);

        Complaint createdComplaint = complaintController.createComplaint(newComplaint);

        assertEquals(newComplaint, createdComplaint);
    }

    @Test
    void testGetComplaintById() {
        Long complaintId = 1L;
        Complaint expectedComplaint = new Complaint(complaintId, new Customers(), "Category", "Open", LocalDateTime.now(), null, "Complaint Text");
        when(complaintService.getComplaintById(complaintId)).thenReturn(Optional.of(expectedComplaint));

        ResponseEntity<Object> responseEntity = complaintController.getComplaintById(complaintId);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        Complaint actualComplaint = (Complaint) responseEntity.getBody();
        assertEquals(expectedComplaint, actualComplaint);
    }

    @Test
    void testGetComplaintByIdNotFound() {
        Long complaintId = 1L;
        when(complaintService.getComplaintById(complaintId)).thenReturn(Optional.empty());

        ResponseEntity<Object> responseEntity = complaintController.getComplaintById(complaintId);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    void testGetAllComplaints() {
        List<Complaint> expectedComplaints = new ArrayList<>();
        expectedComplaints.add(new Complaint(1L, new Customers(), "Category1", "Open", LocalDateTime.now(), null, "Complaint1"));
        expectedComplaints.add(new Complaint(2L, new Customers(), "Category2", "Closed", LocalDateTime.now(), LocalDateTime.now(), "Complaint2"));

        when(complaintService.getAllComplaints()).thenReturn(expectedComplaints);

        List<Complaint> actualComplaints = complaintController.getAllComplaints();

        assertEquals(expectedComplaints.size(), actualComplaints.size());
        assertEquals(expectedComplaints, actualComplaints);
    }

    @Test
    void testUpdateComplaint() {
        Long complaintId = 1L;
        Complaint updatedComplaint = new Complaint(complaintId, new Customers(), "Updated Category", "In Progress", LocalDateTime.now(), null, "Updated Complaint Text");
        when(complaintService.updateComplaint(complaintId, updatedComplaint)).thenReturn(updatedComplaint);

        Complaint result = complaintController.updateComplaint(complaintId, updatedComplaint);

        assertEquals(updatedComplaint, result);
    }

    @Test
    void testDeleteComplaint() {
        Long complaintId = 1L;
        complaintController.deleteComplaint(complaintId);
        verify(complaintService, times(1)).deleteComplaint(complaintId);
    }
}