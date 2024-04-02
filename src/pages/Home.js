import React, { useState } from 'react';
import SquareThree from '../components/SquareThree';
import SquareTwo from '../components/SquareTwo';
import SquareOne from '../components/SquareOne';
import { Link } from 'react-router-dom';
import userIcon from '../img/logo.png';
import '../App.css';

function Home() {
  // State and function moved inside the component
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

const [recognitionResult, setRecognitionResult] = useState(null);

const handleRecognitionComplete = (result) => {
  if (result.match) {
    setRecognitionResult(result.message); // Set a message to state instead of or in addition to using alert
  } else {
    alert(result.message); // Or update state to display 'no match' in the UI
  }
};

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="icon-lines"></span>
          <span className="navbar-title">IDENTIFEYE</span>
        </div>
        <div className="navbar-user">
        <Link to="/">
            <span className="user-icon"><img src={userIcon} alt="User Icon" /></span>
            <span className="user-status">Admin</span>
          </Link>
        </div>
      </nav>
      <header className="app-header">
        <h1>FACE RECOGNITION</h1>
      </header>
    <div className="squares-container">
    <div className="App">
      <SquareOne onImageUpload={handleImageUpload} />
      <SquareTwo uploadedImage={uploadedImage} onRecognitionComplete={handleRecognitionComplete} />
      <SquareThree />
    </div>
    </div>
    </div>
    
  );
}

export default Home;
