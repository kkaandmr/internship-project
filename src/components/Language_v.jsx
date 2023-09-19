import React from 'react';
const Language_v = ({language}) => {

    return (
      <div>
        <div className="text text-with-label">
            <span className="name" style={{ fontSize: '15px', color: 'grey',marginRight:'10px'}}>Dil</span>
            <span className="value" style={{ fontSize: '15px', color: 'azure', marginRight: '20px' }}>
              {language}
            </span>
        </div>
      </div>
    );
  }

export default Language_v;