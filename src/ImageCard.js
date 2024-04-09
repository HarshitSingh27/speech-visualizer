import React, { useState } from 'react';

const ImageCard = ({ src, alt }) => {
  const [isMagnified, setIsMagnified] = useState(false);

  const cardStyle = {
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.18)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: isMagnified ? 10 : 1,
    position: isMagnified ? 'fixed' : 'static',
    left: isMagnified ? '50%' : 'auto',
    top: isMagnified ? '50%' : 'auto',
    transform: isMagnified ? 'translate(-50%, -50%) scale(1)' : 'none',
    maxWidth: isMagnified ? '90%' : '100px', 
    maxHeight: isMagnified ? '90%' : '100px',
    borderRadius: '5px',
    overflow: 'hidden',
    backgroundColor: isMagnified ? '#808080' : 'transparent',  
  };

  const handleClick = () => {
    setIsMagnified(!isMagnified);
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <img 
        src={src} 
        alt={alt} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} 
      />
    </div>
  );
};

export default ImageCard;
