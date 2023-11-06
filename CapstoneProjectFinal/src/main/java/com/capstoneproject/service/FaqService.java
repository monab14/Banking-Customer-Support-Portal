package com.capstoneproject.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.Faq;
import com.capstoneproject.repository.FaqRepository;

import java.util.List;

@Service
public class FaqService {

    @Autowired
    private FaqRepository faqRepository;

    public List<Faq> getAllFaqs() {
        return faqRepository.findAll();
    }

    public Faq getFaqById(int faqId) {
        return faqRepository.findById(faqId).orElse(null);
    }

    public Faq saveFaq(Faq faq) {
        return faqRepository.save(faq);
    }

    public void deleteFaq(int faqId) {
        faqRepository.deleteById(faqId);
    }

    
}
