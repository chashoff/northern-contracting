import React from 'react';
import BackgroundVideo from './components/backgroundVideo/BackgroundVideo';
import ReactRotatingText from 'react-rotating-text';
import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <div className="home-container">
        <h2 className="about-header">Welcome To Northern Contracting</h2>
        <p className="about-para">We have been in the industry for years, and have an understanding of the work<br />
        that needs to be done at a price that is easily attainable. For whatever project <br/>
        you need. You have us here at Northern to help.</p>
        <div className="rotating-container">
          <ReactRotatingText className="rotating-text" color="#A28841" cursor={false} typingInterval={0} eraseMode="overwrite" items={['Excavating','Grading','Clearing']} />
          <h2 style={{fontSize: '3rem', textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold', color: 'white'}}>Services</h2>
          <ReactRotatingText className="rotating-text" color="#A28841" cursor={false} typingInterval={0} eraseMode="overwrite" items={['Demolition','Driveways']} />
        </div>
        <div className="tri-container">
          <div className="tri-box">
            <img className="tri-box-icon" src="/images/calendar.svg" alt="" />
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          </div>
          <div className="tri-box-seperator" />
          <div className="tri-box">
            <img className="tri-box-icon" src="/images/world.svg" alt="" />
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          </div>
          <div className="tri-box-seperator" />
          <div className="tri-box">
            <img className="tri-box-icon" src="/images/calendar.svg" alt="" />
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;