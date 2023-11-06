package com.capstoneproject.entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "table_chatbotrequests")
public class ChatBotRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getRequestId() {
		return requestId;
	}
	public void setRequestId(Long requestId) {
		this.requestId = requestId;
	}
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
	public String getQuery() {
		return query;
	}
	public void setQuery(String query) {
		this.query = query;
	}
	public String getResponse() {
		return response;
	}
	public void setResponse(String response) {
		this.response = response;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
	    
	public String getPrompt() {
	    return prompt;
    }
	public void setPrompt(String prompt) {
		this.prompt = prompt;
	}
	public Integer getMaxTokens() {
		return maxTokens;
	}
	public void setMaxTokens(Integer maxTokens) {
		this.maxTokens = maxTokens;
	}
		private String prompt;
		private Integer maxTokens;
		private Long requestId;
	    private Long customerId;
	    private String query;
	    private String response;
	    private Timestamp timestamp;
	    
		public ChatBotRequest(Long requestId, Long customerId, String query, String response, Timestamp timestamp) {
			super();
			this.requestId = requestId;
			this.customerId = customerId;
			this.query = query;
			this.response = response;
			this.timestamp = timestamp;
		}
	    

}
