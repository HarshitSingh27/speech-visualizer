import React, { useState } from 'react';
 
const ImageCard = ({ src, alt }) => {
  const [isMagnified, setIsMagnified] = useState(false);

  // Styles for the card when not magnified
  const cardStyle = {
    cursor: 'pointer',
    margin: '10px',
    borderRadius: '5px',
    transition: 'transform 0.3s ease-in-out',
    position: 'relative',
    maxWidth: '35vw',  
    maxHeight: '35vh',
  };

  // Styles for the card when magnified
  const magnifiedStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10500,  
    maxWidth: '180vw',
    maxHeight: '180vh',
    backgroundColor:'lightgrey',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  };

  // Styles for the overlay when an image is magnified
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1040,  
    display: isMagnified ? 'block' : 'none',
  };

   
  const closeButtonStyle = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    background: 'white',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    zIndex: 1051, // Above the magnified image
  };

  return (
    <>
      {isMagnified && <div style={overlayStyle} onClick={() => setIsMagnified(false)} />}
      <div style={isMagnified ? magnifiedStyle : cardStyle} onClick={isMagnified ? undefined : () => setIsMagnified(true)}>
        {isMagnified && (
          <button
            style={closeButtonStyle}
            onClick={(e) => {
              e.stopPropagation();  
              setIsMagnified(false);
            }}
          >
            ×
          </button>
        )}
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '1px',
          }}
        />
      </div>
    </>
  );
};
const SpeechDisplay = ({ title, author, videoId, message, audience, date, goal, visualizations }) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '800px',
    height: 'auto',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    padding: '20px',
    marginTop: '50px',
    borderRadius: '10px',
    backgroundColor: 'white',
    textAlign: 'center',
  };
  const videoContainerStyle = {
    position: 'relative',  
    width: '100%',         
    paddingTop: '56.25%',  
    margin: '20px 0',      
  };
  const headerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    width: '100%',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    color: 'black',
  };

  const visualizationContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '20px 0',
};
  const infoContainerStyle = {
    textAlign: 'left',  
    padding: '10px',  
  };

  return (
    <div style={cardStyle} className="speech-display">
      <div style={headerStyle}>
        <h2>{title}</h2>
        <h3>By: {author}</h3>
      </div>
      <div style={infoContainerStyle}>
        <p><strong>Message:</strong> {message}</p>
        <p><strong>Audience:</strong> {audience}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Goal:</strong> {goal}</p>
      </div>
      <div className="video-container" style={videoContainerStyle}>
  <iframe
    style={{
      position: 'absolute',  
      top: 0,
      left: 0,
      width: '100%',  
      height: '100%',  
    }}
    src={youtubeEmbedUrl}
    title={title}
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
      <div style={visualizationContainerStyle}>
        {visualizations.map((imageSrc, index) => (
          <ImageCard key={index} src={imageSrc} alt={`Visualization ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default SpeechDisplay;
