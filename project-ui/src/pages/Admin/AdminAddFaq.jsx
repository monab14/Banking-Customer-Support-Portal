import React, { useState, useEffect } from 'react';
import AdminNavBar from './AdminNavBar';
import { Link } from 'react-router-dom';
import FaqService from '../../Services/FaqService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAddFaq = () => {
  const [faq, setFaq] = useState({
    question: "",
    category: "",
    answer: "",
  });

  const [msg, setMsg] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    FaqService.getFaqs()
      .then((response) => {
        setFaqs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching FAQs:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaq({ ...faq, [name]: value });
  };

  const handleViewClick = () => {
    setShowTable(prevShowTable => !prevShowTable);
  };

  const handleTableDoubleClick = () => {
    setShowTable(false);
  };

  const AddFaq = (e) => {
    e.preventDefault();

    FaqService.saveFaq(faq)
      .then((res) => {
        console.log("Faq Added Successfully");
        setMsg("Faq Added Successfully");
        toast.success("FAQ Added Successfully");

        setFaq({
          question: "",
          category: "",
          answer: "",
        });

        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const customGutterStyle = {
    marginRight: '-0.375rem',
    marginLeft: '-0.375rem',
    padding: '0px 120px',
  };

  const textAreaStyle = {
    width: '100%',
    height: '120px',
    resize: 'none',
    border: '6px solid #ccc',
    borderRadius: '4px',
    marginTop: '2rem',
    padding: '8px'
  };

  const columnStyle = {
    paddingRight: '0.375rem',
    paddingLeft: '0.375rem',
    border: '2px solid #871f40',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  };

  const columnStyle2 = {
    paddingRight: '0.375rem',
    paddingLeft: '0.375rem',
    border: '2px solid ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '30px',
    color: '#871f40' // Added color property // Adjust this value to change text size
  };

  const customColumnStyle = {
    padding: '1rem',
    marginTop: '2rem',
    textAlign: 'left' // Added margin to create space
  };

  return (
    <div>
      <AdminNavBar /> <ToastContainer />
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <div className="row " style={customGutterStyle}>
          <div className="col-6 col-md-2" style={columnStyle}>
            <img src='https://cdn-icons-png.flaticon.com/512/2037/2037655.png' height='80px' width='100px' alt='icon'></img>
          </div>
          <div className="col-sm-6 col-md-8" style={columnStyle2} >
            See All Existing FAQ's
          </div>
          <div className="col-6 col-md-2" style={columnStyle2}>
            <Link className="link" to="#" role="button" onClick={handleViewClick}>
              View
            </Link>

          </div>
        </div>
        {/* ... (previous code) */}
        <div className="container mt-3">
          <section className="d-flex justify-content-between">
            <div className="left_data mt-3 p-2 col-lg-12" style={{padding: '150px'}}>
              <div className="row">
                {faqs.length === 0 ? (
                  <div className="col-10 text-center " style={{ fontSize: '23px' }} >
                    <p ><strong>No Faq Available </strong></p>
                  </div>
                ) : (
                  showTable && (
                    <table className="table table-bordered table-striped"   onDoubleClick={handleTableDoubleClick}>
                      <thead className="table-dark" >
                        <tr>
                          <th>FAQ Title</th>
                          <th>Category</th>
                          <th>Content</th>
                        </tr>
                      </thead>
                      <tbody>
                        {faqs.map((faq) => (
                          <tr key={faq.id}>
                            <td>{faq.question}</td>
                            <td>{faq.category}</td>
                            <td>{faq.answer}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )
                )}
              </div>
            </div>
          </section>
        </div>

        <div className="container px-4 text-center">
          
          <div className="row gx-5">
            {msg && <p className="fs-4 text-center text-success">{msg}</p>}

            <div className="col mx-4" style={customColumnStyle}>
              <h3>FAQ Title</h3>
              <textarea
                style={textAreaStyle}
                name="question"
                onChange={(e) => handleChange(e)}
                value={faq.question} // Use faq, not faqs
              ></textarea>
            </div>
            <div className="col mx-4" style={customColumnStyle}>
              <h3>Category</h3>
              <textarea
                style={textAreaStyle}
                name="category"
                onChange={(e) => handleChange(e)}
                value={faq.category} // Use faq, not faqs
              ></textarea>
            </div>
            <div className="col mx-4" style={customColumnStyle}>
              <h3>Content</h3>
              <textarea
                style={textAreaStyle}
                name="answer"
                onChange={(e) => handleChange(e)}
                value={faq.answer} // Use faq, not faqs
              ></textarea>
            </div>

          </div><br />
          <div>
            <button
              type="button"
              className="btn btn-lg btn-outline-success"
              onClick={(e) => AddFaq(e)}
            >
              Save Changes
            </button>
          </div>{showSuccessMessage && (
            <div className="text-success fs-4 text-center mt-3">
              Faq Added Successfully
            </div>
          )}
        </div><br /><br />
      </div>
    </div>
  );
}

export default AdminAddFaq;