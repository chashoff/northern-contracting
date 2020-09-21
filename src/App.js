import React from 'react';
import BackgroundVideo from './components/backgroundVideo/BackgroundVideo';
import ReactRotatingText from 'react-rotating-text';
import MapSection from './components/map';
import FormSection from './components/form/Form';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const location = {
    address: '171 Township Rd 185 SW, Junction City, OH 43748',
    lat: 39.721862,
    lng: -82.3091,
  }
  return (
    <div className="App">
      <BackgroundVideo />
      <div className="home-container">
        <h2 id="whatwedo" className="about-header">Welcome To Northern Contracting</h2>
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
            <h3 className="tri-box-icon">.01</h3>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          </div>
          <div className="tri-box-seperator" />
          <div className="tri-box">
            <h3 className="tri-box-icon">.02</h3>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          </div>
          <div className="tri-box-seperator" />
          <div className="tri-box">
            <h3 className="tri-box-icon">.03</h3>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-box">
          <h2>About Us</h2>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </div>
        <div className="about-box">
          <video autoPlay="autoplay" loop="loop" muted className="video" >
            <source src="./video/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <MapSection location={location} zoomLevel={17} />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;