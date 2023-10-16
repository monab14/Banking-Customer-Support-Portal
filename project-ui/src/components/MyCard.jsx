

import React from 'react';

const MyCard = ({ title, subtitle, content }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title" style={{padding: '20px', textDecorationColor: '#871f40' }}><bold>{title}</bold></h5>
          <h6 className="card-subtitle mb-2 text-muted" style={{padding: '20px'}}><strong>{subtitle} </strong></h6>
          <p className="card-text" style={{padding: '10px'}}>{content}</p>
          {/* <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default MyCard;
