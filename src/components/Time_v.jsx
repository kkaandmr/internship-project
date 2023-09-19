import React from 'react';
const Time_v = ({time}) => {

    return (
      <div>
        <div className="text text-with-label" style={{ display: 'inline-flex' }}>
            <span className="name"></span>
            <span className="value" id="dk">{time}</span>
        </div>
      </div>
    );
  }

export default Time_v;