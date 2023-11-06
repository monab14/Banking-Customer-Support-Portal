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

import com.capstoneproject.entity.Assignments;
import com.capstoneproject.repository.AssignmentsRepository;
import com.capstoneproject.service.impl.AssignmentsServiceImpl;

@SpringBootTest
public class AssignmentsServiceImplTest {

    @Mock
    private AssignmentsRepository assignmentsRepository;

    @InjectMocks
    private AssignmentsServiceImpl assignmentsService;

    @Test
    public void testSaveAssignment() {
        Assignments assignmentToSave = new Assignments(1L, 1L, 1L, "2023-10-07", "Open", null);

        when(assignmentsRepository.save(assignmentToSave)).thenReturn(assignmentToSave);

        Assignments savedAssignment = assignmentsService.save(assignmentToSave);

        Assertions.assertNotNull(savedAssignment);
        Assertions.assertEquals(1L, savedAssignment.getAssignmentId());
    }

    @Test
    public void testGetAssignments() {
        List<Assignments> assignmentsList = new ArrayList<>();
        assignmentsList.add(new Assignments(1L, 1L, 1L, "2023-10-07", "Open", null));
        assignmentsList.add(new Assignments(2L, 2L, 2L, "2023-10-08", "Closed", null));

        when(assignmentsRepository.findAll()).thenReturn(assignmentsList);

        List<Assignments> result = assignmentsService.getAssignments();

        Assertions.assertNotNull(result);
        Assertions.assertEquals(2, result.size());

        Assertions.assertEquals(1L, result.get(0).getAssignmentId());
    }

    @Test
    public void testFindOneAssignment() {
        long assignmentId = 1L;
        Assignments assignment = new Assignments(assignmentId, 1L, 1L, "2023-10-07", "Open", null);

        when(assignmentsRepository.findById(anyLong())).thenReturn(Optional.of(assignment));

        Assignments result = assignmentsService.findOne(assignmentId);

        Assertions.assertNotNull(result);
        Assertions.assertEquals(assignmentId, result.getAssignmentId());
        Assertions.assertEquals("Open", result.getStatus());
    }

    @Test
    public void testDeleteAssignment() {
        long assignmentId = 1L;
        Assignments assignment = new Assignments(assignmentId, 1L, 1L, "2023-10-07", "Open", null);

        assignmentsService.deleteOne(assignment);

        verify(assignmentsRepository).delete(assignment);
    }
}
