import React, { useState , useEffect} from 'react';
import SupportNavBar from './SupportNavBar';
import axios from 'axios';
const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
 const [category, setCategory] = useState("");
 const [answer, setAnswer] = useState(null);
 const [submitted, setSubmitted] = useState(false);
  const fetchFaqs = async () => {
    try {
      const response = await axios.post('http://localhost:8090/api/faqs');
      setFaqs(response.data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  

  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');
  const [dropdown4, setDropdown4] = useState('');

  const dropdown1Options = [
    'Report A Fraud Or Dispute',
    'Bank Accounts',
    'Cards',
    'Loans',
    'Digital Banking'
  ];

  const dropdown2Options = {
    'Report A Fraud Or Dispute': ['Report a Fraud', 'Report a Dispute'],
    'Bank Accounts': ['Current Accounts', 'Savings Account'],
    'Cards': ['Credit Card', 'Debit cards', 'FOREX cards'],
    'Loans': ['Home Loans', 'Personal'],
    'Digital Banking':['Axis Mobile app', 'Axis pay Upi']
  };

  const dropdown3Options = {
    'Report a Fraud': ['Debit and Credit Cards', 'UPI', 'Internet and Mobile Banking'],
    'Report a Dispute': ['Debit and Credit Cards', 'UPI', 'Internet and Mobile Banking'],
    'Current Accounts': ['Debit Card', ' SMS alert Facility', 'Account Transfer', 'Charges and Balance'],
    'Savings Account': ['Welcome Kit', 'Account Opening', 'Update Details', 'Fees and Charges', 'Types of Funds Transfer'],
    'Credit Card': ['Credit Card Application', 'Credit Card Pin'],
    'Debit cards': ['Replace and Update my Debit Card','Generate Debit Card Pin'],
    'FOREX cards': ['Update details', 'Forex cards and Pin'],
    'Home Loans': ['Loan Application', 'Update Personal Details' ],
    'Personal': [ 'Loan Application','Update Personal Details' ],
    'Axis Mobile app': ['Insta Services', 'Mutuals Funds' ],
    'Axis pay Upi':['Transaction through UPI', 'Accounts and Contants']
  };

  const dropdown4Options = {
    'Debit and Credit Cards': ['What is a Disputed Transaction', 'What are the documents required to raise a dispute?', 'Where do I submit these documents', 'What is the action taken on dispited transaction' ],
    'UPI': ['What is a Disputed Transaction', 'Account debited but beneficiary account not credited',  'What are the timelines for resolution '],
    'Internet and Mobile Banking': ['What is a Disputed Transaction', 'Unauthorised funds transfer have been initiated from my axis mobile app or Internet banking'],
    'Debit Card': ['What are the types of Debit Crads available for current accounts', 'What are the charges applicable for a Debit Card'],
    ' SMS alert Facility': ['Why should I register for SMS alert facility', 'How do I register for SMS facility'],
    'Account Transfer': ['How do I transfer my account from one branch to another', 'Will account details change if I tranfer my account to another Branch'],
    'Charges and Balance': ['How di I check the balance in my Current Account', 'Charges applicable on my current Account'],
    'Welcome Kit': ['What does savings account welcome kit comprise', 'I have not received the welcome kit for my saving account'],
    'Account Opening': ['What is a Savings account', ' Who can open a saving bank account'],
    'Update Details': ['How do I update email Id for my bank account', 'How do I update the mobile number for my saving account'],
    'Fees and Charges': ['What are consolidated charges', 'what is average balance', 'I wnat refund of NEFT transaction charges'],
    'Types of Funds Transfer': ['What is RTGS', 'What is NEFT'],
    'Credit Card Application': ['How do I apply for a credit card', 'How do I check status of my credit card application'],
    'Credit Card Pin': ['How do I generate mu primary or addon credit card pin', 'How can I generate a credit card pin online for a new credit card'],
    'Replace and Update my Debit Card': ['How do I replace or upgrade my Debit Card'],
    'Generate Debit Card Pin': ['How do I generate my Debit card Pin'],
    'Update details': ['Update Passport', 'Update Mobile Number'],
    'Forex cards and Pin': ['Generate Forex card pin', 'Block Forex card'],
    'Loan Application': ['He do I apply for Home or personal Loan'],
    'Update Personal Details': ['Loan Application', 'Loan Statement'],
    'Insta Services': ['Update pan', 'Update KYC'],
    'Mutuals Funds': ['How can I register for this Service', 'Can I cancel the transaction'],
    'Transaction through UPI': ['How do I send money via BHIM Axis Pay UPI App', 'How do I reset or change UPI PIN'],
    'Accounts and Contants':['How do I delete an account from BHIM pay ', 'How do I add contacts in BHIM axis pay']

  };

  const handleDropdown1Change = (e) => {
    const selectedValue = e.target.value;
    setDropdown1(selectedValue);
    setDropdown2('');
    setDropdown3('');
    setDropdown4('');
  };

  const handleDropdown2Change = (e) => {
    setDropdown2(e.target.value);
    setDropdown3('');
    setDropdown4('');
  };

  const handleDropdown3Change = (e) => {
    setDropdown3(e.target.value);
    setDropdown4('');
  };

  const handleDropdown4Change = (e) => {
    setDropdown4(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(
      "Submitted:",
      category,
      dropdown1,
      dropdown2,
      dropdown3,
      dropdown4
    );

    try {
      const question = `I have a query related to ${dropdown1} specific to ${dropdown2} for which I have an issue ${dropdown3} with sub issues ${dropdown4}`;
      await axios.post("http://localhost:8090/api/faqs", {
        category,
        dropdown1,
        dropdown2,
        dropdown3,
        dropdown4,
        question,
        answer: null,
      });
      setSubmitted(true);
      
      fetchFaqs();
    } catch (error) {
      console.error("Error submitting FAQ:", error);
    }

    setCategory("");
    setDropdown1("");
    setDropdown2("");
    setDropdown3("");
    setDropdown4("");
  };

  return (
    <div>
      <SupportNavBar />
      <div
        className="container mt-5 p-4"
        style={{ backgroundColor: "#F7F7F7", borderRadius: "20px" }}
      >
        <h1 className="text-center" style={{ color: "#871f40" }}>
          Frequently Asked Questions
        </h1>
        <div
          className="container mt-5 p-5"
          style={{ backgroundColor: "#FFF", borderRadius: "20px" }}
        >
          <h4
            style={{
              fontSize: "1.6rem",
              fontFamily: "lato-light",
              paddingBottom: "15px",
              maxWidth: "100%",
              color: "#871f40",
              lineHeight: "2",
              marginBottom: "20px",
            }}
          >
            I have a query related to{" "}
            <select value={dropdown1} onChange={handleDropdown1Change}>
              <option value="">Start Selection Here</option>
              {dropdown1Options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>{" "}
            specific to{" "}
            <select value={dropdown2} onChange={handleDropdown2Change}>
              <option value="">Continue Selecting</option>
              {dropdown2Options[dropdown1] &&
                dropdown2Options[dropdown1].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>{" "}
            for which I have an issue{" "}
            <select value={dropdown3} onChange={handleDropdown3Change}>
              <option value="">Choose your Query</option>
              {dropdown3Options[dropdown2] &&
                dropdown3Options[dropdown2].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>{" "}
            with sub issues{" "}
            <select value={dropdown4} onChange={handleDropdown4Change}>
              <option value="">Select Specifics</option>
              {dropdown4Options[dropdown3] &&
                dropdown4Options[dropdown3].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </h4>
          <div className="mb-3">
            <h4
              className="text-center"
              style={{ color: "#871f40" }}
            >
              Category
            </h4>
            <select
              id="category"
              className="form-select"
              value={category}
              onChange={handleCategoryChange}
              style={{ borderColor: "#871f40", color: "#871f40" }}
            >
              <option value="">Select Category</option>
              {dropdown1Options.map((option, index) => (
                <option key={index} value={option} style={{ color: "#871f40" }}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              style={{ backgroundColor: "#871f40", color: "#FFF" }}
              onClick={handleSubmit}
            >
              Submit
            </button>
            {submitted && (
              <p className="text-success">FAQ Submitted Successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;

