import React from 'react';
const Summary_v = ({summary}) => {

    return (
      <div>
          <div className="text paragraph" id="paragraph">
           {summary}
          </div>
      </div>
    );
  }

export default Summary_v;