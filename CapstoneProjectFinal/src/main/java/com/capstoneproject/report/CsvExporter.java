package com.capstoneproject.report;
import com.capstoneproject.entity.Complaint;
import com.opencsv.CSVWriter;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStreamWriter;

@Component
public class CsvExporter {

    public static void exportComplaintToCsv(Complaint complaint, HttpServletResponse response) throws IOException {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=\"complaint.csv\"");

        try (CSVWriter writer = new CSVWriter(new OutputStreamWriter(response.getOutputStream()))) {
            String[] header = {"Field Name", "Value"};
            writer.writeNext(header);

            // Add rows for the complaint fields
            writer.writeNext(new String[]{"Complaint ID", complaint.getComplaintId().toString()});
            writer.writeNext(new String[]{"Customer First Name", complaint.getCustomer().getFirstName()});
            writer.writeNext(new String[]{"Customer Last Name", complaint.getCustomer().getLastName()});
            writer.writeNext(new String[]{"Complaint Category",complaint.getCategory()});
            writer.writeNext(new String[]{"Complaint Category",complaint.getStatus()});
            writer.writeNext(new String[]{"Resolved At",complaint.getResolvedAt() != null ? complaint.getResolvedAt().toString() : ""});

            writer.writeNext(new String[]{"Complaint Category",complaint.getComplaintText()});
        }
    }
}
