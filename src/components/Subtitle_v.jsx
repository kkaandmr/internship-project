import React from 'react';
const Subtitle_v = ({subtitle}) => {

    return (
      <div>
        <div className="text text-with-label">
            <span className="name" style={{ fontSize: '15px', color: 'grey',marginRight:'10px'}}>Altyazı</span>
            <span className="value" style={{ fontSize: '15px', color: 'azure', marginRight: '20px' }}>
              {subtitle}
            </span>
        </div>
      </div>
    );
  }

export default Subtitle_v;