package com.capstoneproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.Report;
import com.capstoneproject.repository.ReportRepository;

import java.util.List;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;

    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }

    public Report getReportById(int reportId) {
        return reportRepository.findById(reportId).orElse(null);
    }

    public Report saveReport(Report report) {
        return reportRepository.save(report);
    }

    public void deleteReport(int reportId) {
        reportRepository.deleteById(reportId);
    }
    

	public Object updateReport(Report report) {
		// TODO Auto-generated method stub
		return null;
	}

	
    // You can add more methods as per your requirements
}