package com.capstoneproject.impl.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.capstoneproject.controller.ReportController;
import com.capstoneproject.entity.Report;
import com.capstoneproject.service.ReportService;

@SpringBootTest
public class ReportControllerTest {

    @Mock
    private ReportService reportService;

    @InjectMocks
    private ReportController reportController;

    @SuppressWarnings("deprecation")
	@BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }
    @Test
    void testGetAllReports() {
        List<Report> expectedReports = Arrays.asList(
            new Report(1, "Report1", "Data1"),
            new Report(2, "Report2", "Data2")
        );
        
        when(reportService.getAllReports()).thenReturn(expectedReports);

        List<Report> actualReports = reportController.getAllReports();

        assertEquals(expectedReports.size(), actualReports.size());
        assertEquals(expectedReports.get(0).getReportId(), actualReports.get(0).getReportId());
        // Add more assertions as needed
    }


    @Test
    void testGetReportById() {
        int reportId = 1;
        Report expectedReport = new Report(reportId, "ReportName", "ReportData");
        
        when(reportService.getReportById(reportId)).thenReturn(expectedReport);

        Report actualReport = reportController.getReportById(reportId);

        assertEquals(expectedReport.getReportId(), actualReport.getReportId());
        assertEquals(expectedReport.getReportName(), actualReport.getReportName());
        assertEquals(expectedReport.getReportData(), actualReport.getReportData());
    }
   
   
   



  

}
