package com.capstoneproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstoneproject.entity.ChatBotRequest;
import com.capstoneproject.repository.ChatBotRequestRepository;


@Service
public class ChatBotRequestService {
	
	private final ChatBotRequestRepository chatBotRequestRepository;

    @Autowired
    public ChatBotRequestService(ChatBotRequestRepository chatBotRequestRepository) {
        this.chatBotRequestRepository = chatBotRequestRepository;
    }

	public ChatBotRequest getChatBotRequestById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}



	public ChatBotRequest saveChatBotRequest(ChatBotRequest chatBotRequest) {
		// TODO Auto-generated method stub
		return null;
	}

}
