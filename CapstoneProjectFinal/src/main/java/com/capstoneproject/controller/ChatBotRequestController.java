package com.capstoneproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstoneproject.entity.ChatBotRequest;
import com.capstoneproject.service.ChatBotRequestService;


@RestController
@RequestMapping("/chatbot-requests")
@CrossOrigin("http://localhost:3000")
public class ChatBotRequestController {
	
	private final ChatBotRequestService chatBotRequestService;

    @Autowired
    public ChatBotRequestController(ChatBotRequestService chatBotRequestService) {
        this.chatBotRequestService = chatBotRequestService;
    }

    @PostMapping
    public ChatBotRequest createChatBotRequest(@RequestBody ChatBotRequest chatBotRequest) {
        return chatBotRequestService.saveChatBotRequest(chatBotRequest);
    }

    @GetMapping("/{id}")
    public ChatBotRequest getChatBotRequestById(@PathVariable Long id) {
        return chatBotRequestService.getChatBotRequestById(id);
        
        
    }

}
