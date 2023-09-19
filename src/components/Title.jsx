import React from 'react'

const Title = ({name, english}) => {
  return (
    <div>
        <div className="title-content">
          <div className="text-title" id="title" style={{ fontSize: '35px', color: 'azure' }}>
            <span>{name}</span>
          </div>
        </div>
        <div className="text-subtitle" id="subtitle" style={{ fontSize: '25px', color: '#FFFFFF99' }}>
          {english}
        </div>
    </div>
  )
}

export default Title