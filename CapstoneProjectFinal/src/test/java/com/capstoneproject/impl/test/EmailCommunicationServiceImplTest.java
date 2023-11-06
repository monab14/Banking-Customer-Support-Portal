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

import com.capstoneproject.entity.EmailCommunications;
import com.capstoneproject.repository.EmailCommunicationRepository;
import com.capstoneproject.service.impl.EmailCommunicationServiceImpl;

@SpringBootTest
public class EmailCommunicationServiceImplTest {

    @Mock
    private EmailCommunicationRepository emailCommunicationRepository;

    @InjectMocks
    private EmailCommunicationServiceImpl emailCommunicationService;

    @Test
    public void testSaveEmailCommunication() {
        EmailCommunications emailToSave = new EmailCommunications(1L, "customer123", "Subject", "Body", "2023-09-07");

        when(emailCommunicationRepository.save(emailToSave)).thenReturn(emailToSave);

        EmailCommunications savedEmail = emailCommunicationService.save(emailToSave);

        Assertions.assertNotNull(savedEmail);
        Assertions.assertEquals("Subject", savedEmail.getSubject());
       
    }

    @Test
    public void testGetEmailCommunications() {
        List<EmailCommunications> emailCommunicationsList = new ArrayList<>();
        emailCommunicationsList.add(new EmailCommunications(1L, "customer123", "Subject1", "Body1", "2023-09-07"));
        emailCommunicationsList.add(new EmailCommunications(2L, "customer456", "Subject2", "Body2", "2023-09-08"));

        when(emailCommunicationRepository.findAll()).thenReturn(emailCommunicationsList);

        List<EmailCommunications> result = emailCommunicationService.getEmail();

        Assertions.assertNotNull(result);
        Assertions.assertEquals(2, result.size());

        Assertions.assertEquals("Subject1", result.get(0).getSubject());
        
    }

    @Test
    public void testFindOneEmailCommunication() {
        long emailId = 1L;
        EmailCommunications email = new EmailCommunications(emailId, "customer123", "Subject", "Body", "2023-09-07");

        when(emailCommunicationRepository.findById(anyLong())).thenReturn(Optional.of(email));

        EmailCommunications result = emailCommunicationService.findOne(emailId);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(emailId, result.getEmailid());
        Assertions.assertEquals("Subject", result.getSubject());
       
    }

    @Test
    public void testDeleteEmailCommunication() {
        long emailId = 1L;
        EmailCommunications email = new EmailCommunications(emailId, "customer123", "Subject", "Body", "2023-09-07");

        emailCommunicationService.deleteOne(email);

        verify(emailCommunicationRepository).delete(email);
    }
}
