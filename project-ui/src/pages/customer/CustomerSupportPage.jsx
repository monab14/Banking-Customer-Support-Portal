import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SupportNavBar from './SupportNavBar';
import user from '../../images/user.png';
import ComplaintWrapperButton from '../../components/ComplaintWrapperButton';
import endImage from '../../images/endImage.png';
import end1Image from '../../images/end1Image.png';
import Chatbot from '../../components/Chatbot';

const Card = ({ imageUrl }) => (
    <div style={cardStyle}>
        <img src={imageUrl} alt="Card" style={ cardImageStyle}  />
    </div>
);
const cardStyle = {
    width: '100%', 
    height: '100%',  
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxSizing: 'border-box',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: '20px',
    margin: '0 10px',
    
};

const cardImageStyle = {
    width: '100%',
    height: 'auto', 
    objectFit: 'cover',
    borderRadius: '8px', 
};
const TextSlider = ({ text }) => (
  <div style={textSliderStyle}>
    <p>{text}</p>
  </div>
);

const textSliderStyle = {
  width: '100%',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '20px 0',
};
const CustomerSupportPage = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
        if (dropdownOptions.includes(option)) {
        setSelectedOption(option);
    }
        setShowDropdown(false); 
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClickOutside = (event) => {
       if (
            inputRef.current &&
            !inputRef.current.contains(event.target) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const containerStyle = {
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        position: 'relative', 
    };

    const contentContainerStyle = {
        backgroundColor: '#f2f2f2',
        padding: '50px',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
    };

    const searchBarContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#fff',
        padding: '10px 20px',
        width: '80%',
        boxSizing: 'border-box',
        margin: '0 auto',
    };

    const searchIconStyle = {
        cursor: 'pointer',
        marginRight: '10px',
        fontSize: '20px',
        color: '#871f40',
        width: '20px',
        height: '20px',
    };

    const searchBarInputStyle = {
        width: '100%',
        padding: '10px',
        border: 'none',
        outline: 'none',
    };
 const dropdownStyle = {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
    };


const titleContainerStyle = {
        marginBottom: '20px',
        backgroundColor: '#FFFFFF',
        padding: '10px',
        borderRadius: '20px',
    };
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
       
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '0', 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, 
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                },
            },
        ],
    };

const textSlides = [
    'Internet Banking',
    'Disputed Transaction',
    'Generate a Debit Card pin',
    'Status of Credit card',
    
  ];
    const cardsData = [
        {
            
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqop2dpaj_GECWNOkEL1WPrSsXkHMDWi2jw&usqp=CAU',
        },
        {
            
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQr2HJ-OEVHqviVnpLYU2KxUVxixKUk_riQ&usqp=CAU',
        },
        {
            
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrzv0k3WIvclfJofY1xQZOAGxcn-ytRNtzQ&usqp=CAU',
        },
        {
            
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfqtiY0DnpPSrG7OvzH1O7QD1_8Q4HN5A0A&usqp=CAU',
        },
        {
            
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhhkLnWRAKk71Ah_2gknGq7QBv9H8G2StD2xJ4pTLfUC7f7nW5uFMH8mISdl8ZDDDPtw&usqp=CAU',
        },
        {
            
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy4ju4RtFrTJEwnVx2UPG0wKl994Mok1A0w&usqp=CAU',
        },
        {
            
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9gHlouJHIKXxOS0AnyquT8BzPBeTLHz3KA&usqp=CAU',
        },
    ];
     const handleComplaintWrapperClick = () => {
    
    console.log('Complaint Wrapper Clicked!');
  };
    return (
        <div style={containerStyle}>
            <SupportNavBar />
            <div style={contentContainerStyle}>
                <div style={titleContainerStyle}>
                    <h1>
                        <span style={{ color: '#808080' }}>Axis Bank Support</span>
                        <span style={{ color: '#871f40', fontFamily: 'Italian' }}> Dil Se Open</span>
                    </h1>
                    <p style={{ color: '#871f40' }}>We are here to assist you. Please feel free to reach out.</p>
                </div>

                <div style={searchBarContainerStyle} ref={inputRef}>
                    <img src={user} alt="user" style={searchIconStyle} onClick={handleToggleDropdown} />
                    <input
                        type="text"
                        placeholder="How May I Help You ?"
                        style={searchBarInputStyle}
                        value={selectedOption || searchValue}
                        onChange={handleSearchChange}
                    />
                    {showDropdown && (
                        <div style={dropdownStyle} ref={dropdownRef}>
                            {dropdownOptions.map((option, index) => (
                                <div key={index} onClick={() => handleOptionClick(option)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                <div className = 'mt-3'>
                <Slider {...sliderSettings}>
                    {textSlides.map((text, index) => (
                        <TextSlider key={index} text={text} />
                    ))}
                </Slider>
                </div>

                <h2 className= 'mt-5 mb-3' style={{ color: '#871f40' }}>Latest Updates</h2>
                <Slider {...sliderSettings}>
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                    />
                ))}
                </Slider>

                <ComplaintWrapperButton onClick={handleComplaintWrapperClick} />

                <div className='mt-5'>
                <img
                    src={endImage} 
                    alt="endImage"
                    style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className='mt-5'>
                <img
                    src={end1Image} 
                    alt="end1Image"
                    style={{ width: '100%', height: 'auto' }}
                    />
                    <Chatbot /> 
                </div>
            </div>
        </div>
    );
};

export default CustomerSupportPage;
