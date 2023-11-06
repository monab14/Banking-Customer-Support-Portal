package com.capstoneproject.report;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;

import com.capstoneproject.entity.Complaint;

@Component
public class ExcelExporter {

    public static void exportComplaintToExcel(Complaint complaint, HttpServletResponse response) throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Complaint Details");

        // Create a header row
        Row headerRow = sheet.createRow(0);
        headerRow.createCell(0).setCellValue("Field Name");
        headerRow.createCell(1).setCellValue("Value");

        // Add complaint data
        int rowNum = 1;
        addRow(sheet, rowNum++, "Complaint ID", complaint.getComplaintId().toString());
        addRow(sheet, rowNum++, "Customer First Name", complaint.getCustomer().getFirstName());
        addRow(sheet, rowNum++, "Customer Last Name", complaint.getCustomer().getLastName());
        addRow(sheet, rowNum++, "Category", complaint.getCategory());
        addRow(sheet, rowNum++, "Status", complaint.getStatus());
        addRow(sheet, rowNum++, "Created At", complaint.getCreatedAt().toString());
        addRow(sheet, rowNum++, "Resolved At", complaint.getResolvedAt() != null ? complaint.getResolvedAt().toString() : "");
        addRow(sheet, rowNum++, "Complaint Text", complaint.getComplaintText());

        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=complaint.xlsx");

        workbook.write(response.getOutputStream());
        workbook.close();
    }

    private static void addRow(Sheet sheet, int rowNum, String fieldName, String value) {
        Row row = sheet.createRow(rowNum);
        row.createCell(0).setCellValue(fieldName);
        row.createCell(1).setCellValue(value);
    }
}
