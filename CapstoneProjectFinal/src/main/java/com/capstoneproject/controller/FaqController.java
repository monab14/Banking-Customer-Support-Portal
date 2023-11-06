package com.capstoneproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.capstoneproject.entity.Faq;
import com.capstoneproject.service.FaqService;

import java.util.List;

@RestController
@RequestMapping("/api/faqs")
@CrossOrigin("http://localhost:3000")
public class FaqController {

    @Autowired
    private FaqService faqService;

    public FaqController(FaqService faqService) {
        this.faqService = faqService;
    }

	@GetMapping
    public List<Faq> getAllFaqs() {
        return faqService.getAllFaqs();
    }

    @GetMapping("/{faqId}")
    public Faq getFaqById(@PathVariable int faqId) {
        return faqService.getFaqById(faqId);
    }

    @PostMapping
    public Faq saveFaq(@RequestBody Faq faq) {
        return faqService.saveFaq(faq);
    }

    @DeleteMapping("/{faqId}")
    public void deleteFaq(@PathVariable int faqId) {
        faqService.deleteFaq(faqId);
    }

    @PutMapping("/{faqId}")
    public Faq updateFaq(@PathVariable int faqId, @RequestBody Faq updatedFaq) throws Exception {
        Faq existingFaq = faqService.getFaqById(faqId);
        
        if (existingFaq != null) {
            existingFaq.setCategory(updatedFaq.getCategory());
            existingFaq.setQuestion(updatedFaq.getQuestion());
            existingFaq.setAnswer(updatedFaq.getAnswer());
            
            return faqService.saveFaq(existingFaq);
        } else {
            throw new Exception("FAQ not found with id: " + faqId);
        }
    }

    
}
