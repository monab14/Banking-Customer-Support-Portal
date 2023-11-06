package com.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstoneproject.entity.ChatBotRequest;


public interface ChatBotRequestRepository  extends JpaRepository<ChatBotRequest, Long>{

}
