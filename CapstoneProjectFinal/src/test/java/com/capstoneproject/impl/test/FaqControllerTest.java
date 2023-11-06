package com.capstoneproject.impl.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.capstoneproject.controller.FaqController;
import com.capstoneproject.entity.Faq;
import com.capstoneproject.service.FaqService;


@SpringBootTest
public class FaqControllerTest {

    @Mock
    private FaqService faqService;

    @InjectMocks
    private FaqController faqController;

    @SuppressWarnings("deprecation")
	@BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllFaqs() {
        List<Faq> expectedFaqs = Arrays.asList(
                new Faq(1, "Category1", "Question1", "Answer1"),
                new Faq(2, "Category2", "Question2", "Answer2")
        );

        when(faqService.getAllFaqs()).thenReturn(expectedFaqs);

        List<Faq> actualFaqs = faqController.getAllFaqs();

        assertEquals(expectedFaqs.size(), actualFaqs.size());
        assertEquals(expectedFaqs.get(0).getFaqId(), actualFaqs.get(0).getFaqId());
        // Add more assertions as needed
    }

    @Test
    void testGetFaqById() {
        int faqId = 1;
        Faq expectedFaq = new Faq(faqId, "Category", "Question", "Answer");

        when(faqService.getFaqById(faqId)).thenReturn(expectedFaq);

        Faq actualFaq = faqController.getFaqById(faqId);

        assertEquals(expectedFaq.getFaqId(), actualFaq.getFaqId());
        assertEquals(expectedFaq.getCategory(), actualFaq.getCategory());
        assertEquals(expectedFaq.getQuestion(), actualFaq.getQuestion());
        assertEquals(expectedFaq.getAnswer(), actualFaq.getAnswer());
    }

    @Test
    void testSaveFaq() {
        Faq faq = new Faq(1, "Category", "Question", "Answer");

        when(faqService.saveFaq(faq)).thenReturn(faq);

        Faq savedFaq = faqController.saveFaq(faq);

        assertEquals(faq.getFaqId(), savedFaq.getFaqId());
        assertEquals(faq.getCategory(), savedFaq.getCategory());
        assertEquals(faq.getQuestion(), savedFaq.getQuestion());
        assertEquals(faq.getAnswer(), savedFaq.getAnswer());
    }

    @Test
    void testUpdateFaq() throws Exception {
        int faqId = 1;
        Faq updatedFaq = new Faq(faqId, "UpdatedCategory", "UpdatedQuestion", "UpdatedAnswer");

        // Mock the behavior of getFaqById and saveFaq
        Faq existingFaq = new Faq(faqId, "Category", "Question", "Answer");
        when(faqService.getFaqById(faqId)).thenReturn(existingFaq);
        when(faqService.saveFaq(existingFaq)).thenReturn(updatedFaq);

        Faq responseFaq = faqController.updateFaq(faqId, updatedFaq);

        assertEquals(updatedFaq.getFaqId(), responseFaq.getFaqId());
        assertEquals(updatedFaq.getCategory(), responseFaq.getCategory());
        assertEquals(updatedFaq.getQuestion(), responseFaq.getQuestion());
        assertEquals(updatedFaq.getAnswer(), responseFaq.getAnswer());
    }

    @Test
    void testDeleteFaq() {
        int faqId = 1;

        // Mock the behavior of deleteFaq to return void
        doNothing().when(faqService).deleteFaq(faqId);

        faqController.deleteFaq(faqId);

        verify(faqService, times(1)).deleteFaq(faqId);
    }
}
