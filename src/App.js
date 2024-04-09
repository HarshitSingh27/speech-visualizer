import React, { useState } from 'react';
import SpeechDisplay from './SpeechDisplay'; // Make sure this path matches the location of your SpeechDisplay component file

const speeches = [
  {
    title: "I Have a Dream",
    author: "Martin Luther King",
    videoId: "vP4iY1TtS3s",
    message: "The speech advocates for racial equality and an end to discrimination, emphasizing the idea of a shared dream among all Americans for freedom and justice.",
    audience: "Delivered to over 250,000 civil rights supporters during the March on Washington for Jobs and Freedom.",
    date: "August 28, 1963",
    goal: "The goal was to call for civil and economic rights and an end to racism in the United States, and to push for the passage of civil rights legislation.",
    visualizations: [
      'images/I Have a Dream speech by Martin Luther King Jr HD (subtitled)/amplitude.png',
      'images/I Have a Dream speech by Martin Luther King Jr HD (subtitled)/energy.png',
      'images/I Have a Dream speech by Martin Luther King Jr HD (subtitled)/pitch track.png',
      'images/I Have a Dream speech by Martin Luther King Jr HD (subtitled)/emotion.png',
    ],
  },
  {
    title: "I Am Prepared to Die",
    author: "Nelson Mandela",
    videoId: "gQvlxnWELHM",
    message: "Mandela speaks out against apartheid, highlighting the struggles and injustices faced by black South Africans under the apartheid regime.",
    audience: "The speech was delivered during Mandela's trial in Pretoria, South Africa, where he was accused of sabotage (among other charges) as part of the anti-apartheid struggle.",
    date: "April 20, 1964",
    goal: "His goal was to justify the actions of the African National Congress (ANC) and its allies against apartheid, and to underscore his commitment to the cause, even to the point of facing the death penalty.",
    visualizations: [
       '/images/Nelson Mandela I Am Prepared to Die Speech with subtitles transcript/amplitude.png',
       '/images/Nelson Mandela I Am Prepared to Die Speech with subtitles transcript/energy.png',
       '/images/Nelson Mandela I Am Prepared to Die Speech with subtitles transcript/pitch track.png',
       '/images/Nelson Mandela I Am Prepared to Die Speech with subtitles transcript/emotion.png',
    ],
  },
  {
    title: "Speech at Krupp Factory in Germany",
    author: "Adolf Hitler",
    videoId: "FJ3N_2r6R-o",
    message: "Hitler's speeches often focused on the restoration of German pride, military expansion, and the unification of all Germans. He propagated the idea of the Aryan race's superiority and the need for living space (Lebensraum) for the German people.",
    audience: "This particular speech was likely aimed at German workers and industrialists, focusing on the role of German industry in rebuilding the nation's military strength.",
    date: "1935",
    goal: "To motivate and mobilize the German workforce and industry towards the war effort and the economic revival of Germany under Nazi ideology.",
    visualizations: [
       '/images/Adolf Hitler Speech at Krupp Factory in Germany (1935)  British Pathé/amplitude.png',
       '/images/Adolf Hitler Speech at Krupp Factory in Germany (1935)  British Pathé/energy.png',
       '/images/Adolf Hitler Speech at Krupp Factory in Germany (1935)  British Pathé/pitch track.png',
       '/images/Adolf Hitler Speech at Krupp Factory in Germany (1935)  British Pathé/emotion.png',
    ],
  },
  {
    title: "Speech on Human Rights",
    author: "Eleanor Roosevelt",
    videoId: "sPVWmmVKVk0",
    message: "Advocacy for universal human rights as a foundation for world peace, freedom, and justice, following the devastation of World War II.",
    audience: "Delivered to the United Nations General Assembly as part of her work on the Universal Declaration of Human Rights.",
    date: "December 9, 1948",
    goal: "The goal was to support the adoption of the Universal Declaration of Human Rights, emphasizing the importance of human rights on a global scale.",
    visualizations: [
        '/images/Eleanor Roosevelt Speech Human Rights/amplitude.png',
        '/images/Eleanor Roosevelt Speech Human Rights/energy.png',
        '/images/Eleanor Roosevelt Speech Human Rights/pitch track.png',
        '/images/Eleanor Roosevelt Speech Human Rights/emotion.png',
    ],
  },
  {
    title: "Our Mission Is To Make America Great Again For All Americans",
    author: "Donald Trump",
    videoId: "jvBiQrCRBxM",
    message: "The speech focuses on national rejuvenation, economic revival, and strengthening national borders and security. It emphasizes a return to a perceived former greatness of the United States.",
    audience: "Aimed at the American public and his supporters, during political rallies or key public appearances.",
    date: "Used throughout his 2016 presidential campaign and presidency (2017-2021)",
    goal: "To rally support for his policy agenda and political movement, advocating for changes in various domains including immigration, economy, and national security.",
    visualizations: [
        '/images/President Donald Trump Our Mission Is To Make America Great Again For All Americans/amplitude.png',
        '/images/President Donald Trump Our Mission Is To Make America Great Again For All Americans/energy.png',
        '/images/President Donald Trump Our Mission Is To Make America Great Again For All Americans/pitch track.png',
        '/images/President Donald Trump Our Mission Is To Make America Great Again For All Americans/emotion.png',
    ],
  },
];

function App() {
  const [selectedSpeechIndex, setSelectedSpeechIndex] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedSpeechIndex(event.target.value);
  };
  const headerStyle = {
    width: '100%',
  textAlign: 'center',
  padding: '40px 20px',
  fontSize: '2rem',  
  fontWeight: '300',
  background: 'linear-gradient(to right, #434343 0%, black 100%)',  
  color: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',  
  fontFamily: "'Segoe UI', Helvetica, sans-serif",  
  letterSpacing: '1px',  
  };

  const footerStyle = {
    marginTop: '20px',  
    paddingTop: '20px',  
    width: '100%',
    textAlign: 'center',
    padding: '40px 20px',  
    background: 'linear-gradient(to right, #434343 0%, black 100%)',  
    color: 'rgba(255, 255, 255, 0.9)',  
    fontSize: '1rem',  
    display: 'flex',  
    flexDirection: 'column',  
    alignItems: 'center',  
    justifyContent: 'center',  
    gap: '20px',  
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',  
  };
  
  const linkStyle = {
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',  
    fontWeight: 'bold',  
    '&:hover': {
      textDecoration: 'underline',  
      color: '#4f9a94',  
    },
  };
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#eaeaea',  
  };

  const selectorStyle = {
    margin: '20px',
    padding: '10px 15px',  
    borderRadius: '5px',
    cursor: 'pointer',
    border: '1px solid #ccc',  
    outline: 'none',  
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  
    backgroundColor: 'white',  
    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',  
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',  
    fontSize: '1rem',  
    color: '#333',  
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',  
    },
    '&:focus': {
      borderColor: '#007bff',  
      boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',  
    },
  };

  return (
    
    <div className="App" style={appStyle}>
      <header style={headerStyle}>
        Resonant Voices: A Context-Free Exploration of Audio Patterns in Historical Speeches
      </header>
      <div className="speech-selector" style={{ marginBottom: '20px' }}>
        <label htmlFor="speech-select" style={{ marginRight: '10px' }}>Choose a speech:</label>
        <select id="speech-select" onChange={handleSelectChange} style={selectorStyle}>
          {speeches.map((speech, index) => (
            <option key={index} value={index}>
              {speech.title} by {speech.author}
            </option>
          ))}
        </select>
      </div>

      <SpeechDisplay {...speeches[selectedSpeechIndex]} />
      <footer style={footerStyle}>
        <div>
        <a href="https://colab.research.google.com/drive/1qMy2Dn9N6lBvweNyd0U3v1CqVsIPHm8K?usp=sharing" style={linkStyle}>Link to Speech Code</a>
        </div>
        <div>
          Terms of Use: The provided content is for educational and research purposes only. By using this site, you agree to use the content for lawful purposes only.
        </div>
        <div>
          Disclaimer: The views and opinions expressed in the speeches are those of the respective authors and do not necessarily reflect the official policy or position of the creators of this site. Viewer discretion is advised.
        </div>
        <div>Created by: Harshit, Minrui, Parisa, Utkarsh, Chenyao</div>
      </footer>
    </div>
  );
}

export default App;