import React, { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import AskRadz from "../images/AskRadz.png";
import axios from "axios";

const ChatMessage = ({ type, message, timestamp }) => {
  const messageStyle = {
    padding: "10px",
    borderRadius: "15px",
    textAlign: type === "user" ? "right" : "left",
    marginBottom: "10px",
    color: type === "user" ? "#fff" : "#fff",
    justifyContent: type === "user" ? "flex-end" : "flex-start",
    backgroundColor: type === "user" ? "#750D37" : "#546A76",
    width: "fit-content",
    maxWidth: "70%",
    alignSelf: type === "user" ? "flex-end" : "flex-start",
    position: "relative",
    marginLeft: type === "user" ? "200px" : "0",
    marginRight: type === "user" ? "0" : "70px",
  };

  const userType = type === "user" ? "" : "AskRadz";
  const formattedTimestamp = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(timestamp);
  return (
    <div style={messageStyle}>
      <div
        style={{
          fontSize: "12px",
          color: "#888",
          position: "absolute",
          top: "-15px",
          right: type === "user" ? "0" : "auto",
          left: type === "bot" ? "0" : "auto",
        }}
      >
        {formattedTimestamp}
      </div>
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{userType}</div>
      <div>{message}</div>
    </div>
  );
};

const faqData = [
  {
    question: "What services does the bank offer?",
    answer:
      "The bank offers a wide range of services including savings accounts, loans, credit cards, and more.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "You can reset your password through the online banking portal or by contacting our customer support.",
  },
  {
    question: "How can I check my account balance?",
    answer:
      "You can check your account balance through our mobile banking app, online banking portal, ATMs, or by visiting a nearby branch. Simply log in to your account using your credentials to view your balance.",
  },
  {
    question: "What is the process for applying for a loan?",
    answer:
      "To apply for a loan, visit our official website and navigate to the 'Loans' section. Choose the type of loan you need, fill out the online application form, and submit the required documents. Our loan officers will review your application, and you will be notified of the approval status.",
  },
  {
    question: "Can I open a joint account with someone?",
    answer:
      "Yes, you can open a joint account with another person, such as a family member or a business partner. Both account holders have equal access to the account and can make transactions. Visit a branch together to open a joint account.",
  },
  {
    question: "What should I do if my credit card is lost or stolen?",
    answer:
      "If your credit card is lost or stolen, immediately contact our 24/7 customer support helpline. We will block your card to prevent unauthorized usage and issue a replacement card. It's essential to report the loss as soon as possible to minimize any potential fraudulent activities.",
  },
  {
    question: "How can I enroll in online banking?",
    answer:
      "To enroll in online banking, visit our website and click on the 'Register' or 'Enroll Now' option. Provide your account details, create a username, password, and security questions. Once registered, you can log in to your account online, check balances, transfer funds, and manage your finances conveniently.",
  },
  {
    question: "What are the interest rates for savings accounts?",
    answer:
      "Our savings account interest rates vary depending on the type of account you choose and the current market conditions. For the most accurate and up-to-date information on interest rates, please visit our official website or contact our customer support.",
  },
  {
    question: "How can I set up automatic bill payments?",
    answer:
      "To set up automatic bill payments, log in to your online banking account. Navigate to the bill payment section and add the biller's information, including account number and payment amount. You can schedule recurring payments on specific dates to ensure your bills are paid automatically each month.",
  },
  {
    question: "Is online banking secure?",
    answer:
      "Yes, our online banking system is highly secure. We use advanced encryption and security protocols to protect your personal and financial information. Additionally, we regularly update our security measures to safeguard against online threats. It's crucial to keep your login credentials confidential and log out after each session for added security.",
  },
  {
    question:
      "What should I do if I suspect fraudulent activity on my account?",
    answer:
      "If you suspect any fraudulent activity on your account, contact our customer support immediately. We will investigate the issue, block unauthorized transactions, and guide you through the necessary steps to resolve the situation. It's essential to report any suspicious activity promptly to minimize potential financial losses.",
  },
  {
    question: "Can I open a bank account online?",
    answer:
      "Yes, you can open a bank account online through our official website. Select the type of account you wish to open, fill out the online application form, and provide the required documents electronically. Once your application is reviewed and approved, you will receive your account details, and your account will be active for use.",
  },
  {
    question: "How can I apply for a credit card?",
    answer:
      "To apply for a credit card, visit our website and navigate to the 'Credit Cards' section. Choose the credit card option that suits your needs, fill out the online application form, and submit the necessary documents. Our credit card team will assess your application, and upon approval, you will receive your credit card within a specified timeframe.",
  },
];

const Chatbot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isValidationStep, setIsValidationStep] = useState(true);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showPhoneNumberForm, setShowPhoneNumberForm] = useState(false);
  const [showQuestionOptions, setShowQuestionOptions] = useState(false);
  const [questionOptions, setQuestionOptions] = useState([
    "Account Balance",
    "Transaction Issues",
    "Card Problems",
    "Others",
  ]);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:8090/api/welcome", {
        username,
        password,
      });
      console.log(response.data);
      setIsLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
      setShowLogin(false);
      setChatHistory([{ type: "bot", message: "Logged in successfully." }]);
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };
  const chatbotContainerStyle = {
    position: "fixed",
    bottom: "80px",
    width: "35%",
    height: "80%",
    right: "20px",
    backgroundColor: "#871f40",
    color: "black",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
    display: isChatbotVisible ? "flex" : "none",
    flexDirection: "column",
    padding: "20px",
    zIndex: "999",
    overflowY: "scroll",
    backgroundImage: `url(${require("../images/BGImage.png")})`,
  };

  const navbarStyle = {
    backgroundColor: "#750D37",
    color: "#F0F2EF",
    padding: "10px",
    textAlign: "center",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const closeIconStyle = {
    cursor: "pointer",
  };

  const acceptTermsStyle = {
    color: "#750D37",
    cursor: "pointer",
    textDecoration: "underline",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  };
  const loginFormStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
    color: "#333",
  };

  const selectedButtonStyle = {
    backgroundColor: "#750D37",
    color: "#F0F2EF",
  };
  const submitButtonStyle = {
    width: "80%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: acceptedTerms ? "#750D37" : "#ccc",
    color: acceptedTerms ? "white" : "#666",
    marginTop: "10px",
    cursor: acceptedTerms ? "pointer" : "not-allowed",
    margin: "0 auto",
    alignItems: "center",
  };

  const handleTermsChange = () => {
    if (!acceptedTerms && !localStorage.getItem("loggedIn")) {
      setShowLogin(true);
    } else {
      setAcceptedTerms(!acceptedTerms);
      setShowValidationMessage(false);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const closeChatbot = () => {
    setIsChatbotVisible(false);
    setIsValidationStep(true);
    setAcceptedTerms(false);
    setUserMessage("");
    setChatHistory([]);
  };

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };
  const handleSubmit = () => {
    if (isValidationStep) {
      if (!acceptedTerms) {
        setShowValidationMessage(true);
      } else {
        setIsValidationStep(false);
        setChatHistory([{ type: "user" }]);
      }
    } else {
      setChatHistory([{ type: "user", message: userMessage }]);
    }
    setUserMessage("");
  };

  const updateEmail = async (newEmail, customerId, setChatHistory) => {
    try {
      const response = await fetch(
        `http://localhost:8090/api/customer/${customerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newEmail }),
        }
      );

      if (response.ok) {
        setChatHistory([
          { type: "bot", message: "Email updated successfully." },
        ]);
      } else {
        console.error("Failed to update email");
        setChatHistory([
          {
            type: "bot",
            message: "Failed to update email. Please try again later.",
          },
        ]);
      }
    } catch (error) {
      console.error("Error updating email:", error);

      setChatHistory([
        {
          type: "bot",
          message: "Error updating email. Please try again later.",
        },
      ]);
    }
  };

  const handleAddressFormSubmit = (e) => {
    e.preventDefault();
    const newAddress = e.target.elements.address.value;
    const customerId = 1;
    handleAddressUpdate(newAddress, customerId);
    setShowAddressForm(false);
  };
  const handleQuestionOptionSelect = (selectedOption) => {
    const currentTimeStamp = Date.now();
    const newChatHistory = [
      {
        type: "user",
        message: `Ask: ${selectedOption}`,
        timestamp: currentTimeStamp,
      },
      {
        type: "bot",
        message: `I understand you have a question about ${selectedOption}. Please feel free to ask your question.`,
        timestamp: currentTimeStamp,
      },
    ];
    setChatHistory(newChatHistory);
    setShowQuestionOptions(false);
  };
  const handleAddressUpdate = async (newAddress, customerId) => {
    try {
      const response = await fetch(
        `http://localhost:8090/api/customer/${customerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address: newAddress }),
        }
      );

      if (response.ok) {
        setChatHistory([
          { type: "bot", message: "Address updated successfully." },
        ]);
      } else {
        console.error("Failed to update address");
        setChatHistory([
          {
            type: "bot",
            message: "Failed to update address. Please try again later.",
          },
        ]);
      }
    } catch (error) {
      console.error("Error updating address:", error);
      setChatHistory([
        {
          type: "bot",
          message: "Error updating address. Please try again later.",
        },
      ]);
    }
  };

  const handlePhoneNumberFormSubmit = (e) => {
    e.preventDefault();
    const newPhoneNumber = e.target.elements.phoneNumber.value;
    const customerId = 1;
    handlePhoneNumberUpdate(newPhoneNumber, customerId);
    setShowPhoneNumberForm(false);
  };

  const handlePhoneNumberUpdate = async (newPhoneNumber, customerId) => {
    try {
      const response = await fetch(
        `http://localhost:8090/api/customer/${customerId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber: newPhoneNumber }),
        }
      );

      if (response.ok) {
        setChatHistory([
          { type: "bot", message: "Mobile number updated successfully." },
        ]);
      } else {
        console.error("Failed to update mobile number");
        setChatHistory([
          {
            type: "bot",
            message: "Failed to update mobile number. Please try again later.",
          },
        ]);
      }
    } catch (error) {
      console.error("Error updating mobile number:", error);
      setChatHistory([
        {
          type: "bot",
          message: "Error updating mobile number. Please try again later.",
        },
      ]);
    }
  };

  const handleButtonClick = (action) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      setChatHistory([{ type: "bot" }]);
    } else {
      switch (action) {
        case "Update mobile number":
          setChatHistory([
            { type: "bot", message: " Please enter your new Mobile number." },
          ]);
          setShowPhoneNumberForm(true);
          break;
        case "Update address":
          setChatHistory([
            { type: "bot", message: "Please enter your new Address." },
          ]);
          setShowAddressForm(true);
          break;

        case "Update E-mail":
          setChatHistory([
            { type: "bot", message: "Please enter your new email address:" },
          ]);
          setShowEmailForm(true);
          break;
        case "Ask Question":
          const questionOptionsButtons = questionOptions.map(
            (option, index) => (
              <button
                key={index}
                className="question-option"
                onClick={() => handleQuestionOptionSelect(option)}
                style={{
                  backgroundColor: "white",
                  color: "#750D37",
                  border: "none",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  margin: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                {option}
              </button>
            )
          );

          const botMessage = (
            <div>
              <p>I understand you have a question. Please select a topic:</p>
              <div className="question-options">{questionOptionsButtons}</div>
            </div>
          );

          setChatHistory([
            {
              type: "bot",
              message: botMessage,
            },
          ]);
          setShowQuestionOptions(true);
          break;
        default:
          break;
      }
    }
  };

  const handleEmailFormSubmit = (e) => {
    e.preventDefault();
    const newEmail = e.target.elements.email.value;
    const customerId = 1;
    handleEmailUpdate(newEmail, customerId);
    setShowEmailForm(false);
  };

  const handleEmailUpdate = async (newEmail, customerId) => {
    try {
      await updateEmail(newEmail, customerId, setChatHistory);
    } catch (error) {
      console.error("Error updating email:", error);
    }
  };

  const handleQuestionSubmit = () => {
    const userQuestion = userMessage.toLowerCase();
    const currentTimeStamp = Date.now();

    const matchedQuestion = faqData.find((faq) =>
      userQuestion.includes(faq.question.toLowerCase())
    );

    if (matchedQuestion) {
      const newChatHistory = [
        {
          type: "user",
          message: userMessage,
          timestamp: currentTimeStamp,
        },
        {
          type: "bot",
          message: matchedQuestion.answer,
          timestamp: currentTimeStamp,
        },
      ];
      setChatHistory(newChatHistory);
    } else {
      const newChatHistory = [
        ...chatHistory,
        {
          type: "user",
          message: userMessage,
          timestamp: currentTimeStamp,
        },
        {
          type: "bot",
          message: "I'm sorry, I don't have the answer to that question.",
          timestamp: currentTimeStamp,
        },
      ];
      setChatHistory(newChatHistory);
    }

    setUserMessage("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "999",
      }}
    >
      {isChatbotVisible && (
        <div style={chatbotContainerStyle}>
          <div className="mb-2" style={navbarStyle}>
            <h4>Ask Radz</h4>
            <span style={closeIconStyle} onClick={closeChatbot}>
              <FaTimes />
            </span>
          </div>

          <div
            style={{
              padding: "20px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            {!isValidationStep && !showLogin && (
              <div
                style={{
                  padding: "20px",
                  backgroundImage: `url(${require("../images/BGImage.png")})`,
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  backgroundRepeat: "no-repeat",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
                }}
              >
                <div className="mb-4">
                  <img
                    src={AskRadz}
                    alt="Radz Icon"
                    style={{
                      height: "100px",
                      width: "140px",
                      marginRight: "10px",
                      borderRadius: "35px",
                    }}
                  />
                </div>
                <h4>Hi, Welcome To Axis Bank!</h4>
                <p>I'm Axis Ask Radz, your personal banking assistant</p>
                <div
                  style={{
                    backgroundColor: "#d3d3d3 ",
                    padding: "5px",
                    borderRadius: "10px",
                    color: "#750D37",
                    fontSize: "15px",
                  }}
                >
                  <p>Do you want help with any of these services?</p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <button
                    style={{
                      width: "130px",
                      padding: "5px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#d3d3d3",
                      color: "#750D37",
                      fontSize: "15px",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleButtonClick("Update mobile number")}
                  >
                    Update Mobile Number
                  </button>
                  <button
                    style={{
                      width: "150px",
                      padding: "5px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#d3d3d3",
                      color: "#750D37",
                      fontSize: "15px",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleButtonClick("Update address")}
                  >
                    Update Address
                  </button>
                  <button
                    style={{
                      width: "120px",
                      padding: "5px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#d3d3d3",
                      color: "#750D37",
                      fontSize: "15px",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleButtonClick("Ask Question")}
                  >
                    Ask Questions
                  </button>
                  <button
                    style={{
                      width: "130px",
                      padding: "5px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#d3d3d3",
                      color: "#750D37",
                      fontSize: "15px",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleButtonClick("Update E-mail")}
                  >
                    Update E-Mail
                  </button>
                </div>
              </div>
            )}
            {showEmailForm && (
              <form
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
                  marginTop: "20px",
                }}
                onSubmit={handleEmailFormSubmit}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your new email address"
                  required
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#750D37",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    marginTop: "20px",
                  }}
                >
                  Update Email
                </button>
              </form>
            )}

            {showPhoneNumberForm && (
              <form
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
                  marginTop: "20px",
                }}
                onSubmit={handlePhoneNumberFormSubmit}
              >
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your new mobile number"
                  required
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#750D37",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    marginTop: "20px",
                  }}
                >
                  Update Mobile Number
                </button>
              </form>
            )}

            {showAddressForm && (
              <form
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)",
                  marginTop: "20px",
                }}
                onSubmit={handleAddressFormSubmit}
              >
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your new address"
                  required
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#750D37",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    marginTop: "20px",
                  }}
                >
                  Update Address
                </button>
              </form>
            )}

            {showLogin && !isLoggedIn && (
              <div style={{ ...chatbotContainerStyle, ...loginFormStyle }}>
                <h4 style={{ color: "#750D37", textAlign: "center" }}>Login</h4>

                {!isLoggedIn && (
                  <form onSubmit={handleLoginFormSubmit}>
                    <label
                      htmlFor="username"
                      style={{
                        display: "block",
                        marginBottom: "5px",
                        color: "#750D37",
                        fontWeight: "bold",
                      }}
                    >
                      Username:
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        boxSizing: "border-box",
                      }}
                    />
                    <div style={{ marginBottom: "20px" }}>
                      <label
                        htmlFor="password"
                        style={{
                          display: "block",
                          marginBottom: "5px",
                          color: "#750D37",
                          fontWeight: "bold",
                        }}
                      >
                        Password:
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          fontSize: "16px",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{
                        ...submitButtonStyle,
                        ...(isLoggedIn ? selectedButtonStyle : {}),
                      }}
                    >
                      Log In
                    </button>
                  </form>
                )}
              </div>
            )}

            

            <div
              className="container"
              style={{
                padding: "10px",

                display: "flex",
                flexDirection: "column",
                justifyContent: "flex",
                width: "100%",
                borderRadius: "8px",
                border: "none",

                color: "#d3d3d3",
                fontSize: "15px",
                margin: "10px",
                cursor: "pointer",
                alignSelf: "flex",
              }}
            >
              <div style={{ maxWidth: "100%", alignSelf: "flex" }}>
                {chatHistory.map((chat, index) => (
                  <ChatMessage
                    key={index}
                    type={chat.type}
                    message={chat.message}
                  />
                ))}
              </div>
            </div>

            {isValidationStep && (
              <div
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)",
                }}
              >
                <div className="mb-4">
                  <img
                    src={AskRadz}
                    alt="Radz Icon"
                    style={{
                      height: "100px",
                      width: "140px",
                      marginRight: "10px",
                      borderRadius: "35px",
                    }}
                  />
                </div>
                <h4>
                  Hi, Get Started with Axis Ask Radz, your Axis Bank Anytime
                  Assistant!
                </h4>
                <p>Happy to help you. Just ask & I'll reply in a jiffy.</p>
                <div style={acceptTermsStyle} onClick={handleTermsChange}>
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  Click here to accept all terms and conditions.
                </div>
                {showValidationMessage && (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    Message cannot be empty.
                  </p>
                )}
                <div className="text-center" style={{ marginTop: "20px" }}>
                  <button style={submitButtonStyle} onClick={handleSubmit}>
                    Get Started
                  </button>
                </div>
              </div>
            )}

            <div className="input-area mt-3">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "20px",
                  border: "none",
                  marginRight: "10px",
                  backgroundColor: "#fff",
                  color: "#750D37",
                  fontSize: "16px",
                  boxSizing: "border-box",
                  width: "80%",
                }}
              />
              <button
                onClick={handleQuestionSubmit}
                style={{
                  backgroundColor: "#750D37",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container" style={{ backgroundColor: "#f2f2f2" }}>
        <img
          src={AskRadz}
          alt="Radz Icon"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            height: "100px",
            width: "140px",
            cursor: "pointer",
            borderRadius: "35px",
          }}
          onClick={toggleChatbot}
        />
      </div>
    </div>
  );
};

export default Chatbot;
