import React from 'react';
const Trailer_v = ({trailer}) => {

    return (
      <div>
        <video autoPlay  muted id="id1">
            <source src= {trailer} type="video/mp4" />
        </video>
      </div>
    );
  }

export default Trailer_v;