package com.capstoneproject.report;

import com.capstoneproject.entity.Complaint;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class FileExporter {
	public static void exportComplaintToPdf(Complaint complaint, HttpServletResponse response) throws DocumentException, IOException {
	    Document document = new Document();
	    PdfWriter.getInstance(document, response.getOutputStream());

	    // Set the content type and attachment header.
	    response.setContentType("application/pdf");
	    response.setHeader("Content-Disposition", "attachment; filename=\"complaint.pdf\"");

	    document.open();

	    // Add static body text to the PDF
	    Paragraph bodyText = new Paragraph("Dear " + complaint.getCustomer().getFirstName() + " " + complaint.getCustomer().getLastName() + ",\n\n"
	            + "This correspondence serves as a formal response to your recent complaint filed with Axis Bank. "
	            + "We acknowledge the importance of your feedback and have thoroughly investigated the matter to provide you with a comprehensive report.\n\n"
	            + "Below, you will find a detailed breakdown of the complaint, including relevant information, our investigation findings, and any actions taken to address the issue:\n\n");
	    
	    // Add static heading
	    Font headingFont = new Font(Font.FontFamily.TIMES_ROMAN, 20, Font.BOLD | Font.UNDERLINE);

	    Paragraph heading = new Paragraph(" Customer Complaint Details", headingFont);
	    
	    heading.setAlignment(Element.ALIGN_CENTER); // Align center
	    heading.setSpacingAfter(10); // Add some space after the heading
	    document.add(heading);
	    
	    // Add complaint data to the PDF
	    PdfPTable table = new PdfPTable(2);
	    table.setWidthPercentage(100);
	    table.addCell("Complaint ID");
	    table.addCell(complaint.getComplaintId().toString());
	    
	    table.addCell("Customer First Name");
	    table.addCell(complaint.getCustomer().getFirstName());
	    
	    table.addCell("Customer Last Name");
	    table.addCell(complaint.getCustomer().getLastName());
	    
	    table.addCell("Category");
	    table.addCell(complaint.getCategory());
	    
	    table.addCell("Status");
	    table.addCell(complaint.getStatus());
	    
	    table.addCell("Created At");
	    table.addCell(complaint.getCreatedAt().toString());
	    
	    table.addCell("Resolved At");
	    table.addCell(complaint.getResolvedAt() != null ? complaint.getResolvedAt().toString() : "");
	    
	    table.addCell("Complaint Text");
	    table.addCell(complaint.getComplaintText());
	    
	    // Add static body text to the PDF
	    Paragraph bodyText2 = new Paragraph( "Please be assured that we take your feedback seriously and are committed to continuous improvement in our services. Should you have any further questions or concerns, "
	            + "please do not hesitate to contact our dedicated customer service team through Customer Support Number provided on our Support Portal. \n\n"
	            + "Thank you for your continued trust in Axis Bank.\n\n"
	            + "We appreciate the opportunity to address your concerns and remain at your service.\n\n"
	            + "Sincerely,\n\n"
	            +"Axis bank ");
	    document.add(bodyText); // Add the first static body text
	    document.add(table); // Add the table
	    document.add(bodyText2); // Add the second static body text
	    document.close();
	    
	}
	
}