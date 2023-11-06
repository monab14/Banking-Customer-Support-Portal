package com.capstoneproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstoneproject.entity.Report;
import com.capstoneproject.service.ReportService;



@RestController
@RequestMapping("/api/reports")
@CrossOrigin("http://localhost:3000")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping
    public List<Report> getAllReports() {
        return reportService.getAllReports();
    }

    @GetMapping("/{reportId}")
    public Report getReportById(@PathVariable int reportId) {
        return reportService.getReportById(reportId);
    }

    @PostMapping("/{create}")
    public Report saveReport(@RequestBody Report report) {
        return reportService.saveReport(report);
    }

    @PutMapping("/{reportId}")
    public Report updateReport(@PathVariable int reportId, @RequestBody Report report) throws Exception {
        Report existingReport = reportService.getReportById(reportId);
        
        if (existingReport != null) {
            existingReport.setReportName(report.getReportName());
            existingReport.setReportData(report.getReportData());
            return reportService.saveReport(existingReport);
        } else {
            throw new Exception("Report not found with id: " + reportId);
        }
    }

    @DeleteMapping("/{reportId}")
    public void deleteReport(@PathVariable int reportId) {
        reportService.deleteReport(reportId);
    }
    

	public ResponseEntity<Report> updateReport(Report report) {
		// TODO Auto-generated method stub
		return null;
	}

    
}