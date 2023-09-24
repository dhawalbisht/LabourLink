import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/HomePage'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../src/style/App.css";
import Footer from './Pages/Footer';
const images = [
  "./assets/1.png",
  "./assets/2.png",
  "./assets/3.png",
  "./assets/4.png",
  "./assets/5.png"
];
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HomePage />
  <div className="box">
  <Carousel useKeyboardArrows={true}>
    {images.map((URL, index) => (
      <div className="slide">
        <img alt="sample_file" src={URL} key={index} />
      </div>
    ))}
  </Carousel>
</div>
<Footer />
</React.StrictMode>

)
 
    
