import React from 'react';
const Date_v = ({date}) => {

    return (
      <div>
        <div className="text text-with-label">
            <span className="name"></span>
            <span className="value" id="tarih">{date}</span>
        </div>
      </div>
    );
  }

export default Date_v;