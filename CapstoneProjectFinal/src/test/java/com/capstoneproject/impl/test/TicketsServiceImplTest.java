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

import com.capstoneproject.entity.Tickets;
import com.capstoneproject.repository.TicketsRepository;
import com.capstoneproject.service.impl.TicketsServiceImpl;

@SpringBootTest
public class TicketsServiceImplTest {

    @Mock
    private TicketsRepository ticketsRepository;

    @InjectMocks
    private TicketsServiceImpl ticketsService;

    @Test
    public void testSaveTicket() {
        Tickets ticketToSave = new Tickets(1L, "customer123", "Query", "Open", "2023-09-07", "2023-09-07");

        when(ticketsRepository.save(ticketToSave)).thenReturn(ticketToSave);

        Tickets savedTicket = ticketsService.save(ticketToSave);

        Assertions.assertNotNull(savedTicket);
        Assertions.assertEquals("Query", savedTicket.getQuery());
       
    }

    @Test
    public void testGetTickets() {
        List<Tickets> ticketsList = new ArrayList<>();
        ticketsList.add(new Tickets(1L, "customer123", "Query1", "Open", "2023-09-07", "2023-09-07"));
        ticketsList.add(new Tickets(2L, "customer456", "Query2", "Closed", "2023-09-08", "2023-09-09"));

        when(ticketsRepository.findAll()).thenReturn(ticketsList);

        List<Tickets> result = ticketsService.getTickets();

        Assertions.assertNotNull(result);
        Assertions.assertEquals(2, result.size());

        Assertions.assertEquals("Query1", result.get(0).getQuery());
        
    }

    @Test
    public void testFindOneTicket() {
        long ticketId = 1L;
        Tickets ticket = new Tickets(ticketId, "customer123", "Query", "Open", "2023-09-07", "2023-09-07");

        when(ticketsRepository.findById(anyLong())).thenReturn(Optional.of(ticket));

        Tickets result = ticketsService.findOne(ticketId);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(ticketId, result.getTicketid());
        Assertions.assertEquals("Query", result.getQuery());
       
    }

    @Test
    public void testDeleteTicket() {
        long ticketId = 1L;
        Tickets ticket = new Tickets(ticketId, "customer123", "Query", "Open", "2023-09-07", "2023-09-07");

        ticketsService.deleteOne(ticket);

        
        verify(ticketsRepository).delete(ticket);
    }
}
