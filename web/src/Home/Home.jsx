


//import React from 'react';
//import "./CSS/home.css";
//import { useNavigate } from "react-router"

//const Home = () => {
//  const navigate = useNavigate()
//  return (
//    <div className="home-container" >
//      <div className="background-image">
//        <div className="content">
//          <h1>Welcome to TOH</h1>
//          <h2>The one stop service for tire condition analysis</h2>
//          <br></br><br></br>
//          <button className='button' onClick={()=>navigate('/tollplaza')}>Check tyre condition</button>
//          
//        </div>
//      </div>
//    </div>
//  );
//};

//export default Home;























import React from 'react';
import "./CSS/home.css";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div id="home" className="home-container">
        <div className="background-image">
          <div className="content">
            <h1>Welcome to TOH</h1>
            <h2>The one-stop service for tire condition analysis</h2>
            <br /><br />
            <button className='button' onClick={() => navigate('/tollplaza')}>Check tire condition</button>
          </div>
        </div>
      </div>

      {/* New Section - More Information */}
      <div id="info" className="additional-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>More Information</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus neque.
                Suspendisse potenti. Suspendisse lacinia, est ac dignissim vehicula, lorem libero
                accumsan eros, at venenatis dui elit eu tellus.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Connect with Us</h3>
              {/* Add your social media links here using Bootstrap icons */}
              <a href="#" className="btn btn-dark btn-lg"><i className="bi bi-facebook"></i></a>
              <a href="#" className="btn btn-dark btn-lg"><i className="bi bi-twitter"></i></a>
              <a href="#" className="btn btn-dark btn-lg"><i className="bi bi-instagram"></i></a>
              <a href="#" className="btn btn-dark btn-lg"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Add more sections as needed */}
      <div id="section2" className="additional-section">
        {/* Content for Section 2 */}
      </div>

      <div id="section3" className="additional-section">
        {/* Content for Section 3 */}
      </div>
    </div>
  );
};

export default Home;

