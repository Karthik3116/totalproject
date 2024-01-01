//import React from 'react';
//import { Link } from 'react-router-dom';

//const Navbar = () => {
//  return (
//    <nav className="navbar fixed-top navbar-expand-lg bg-danger " data-bs-theme="dark">
//      <div className="container-fluid">
//        <Link className="navbar-brand" to="/">
//          TOH
//        </Link>
//        <button
//          className="navbar-toggler"
//          type="button"
//          data-bs-toggle="collapse"
//          data-bs-target="#navbarNavAltMarkup"
//          aria-controls="navbarNavAltMarkup"
//          aria-expanded="false"
//          aria-label="Toggle navigation"
//        >
//          <span className="navbar-toggler-icon"></span>
//        </button>
//        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//          <div className="navbar-nav">
//            <Link className="nav-link active" aria-current="page" to="/">
//              Home
//            </Link>
//            <Link className="nav-link" to="/about">
//              About
//            </Link>
//            <Link className="nav-link" to="/contact">
//              Contact
//            </Link>
//            <Link className="nav-link" to="/feedback">
//              Feedback
//            </Link>
//          </div>
//        </div>
//      </div>
//    </nav>
//  );
//};

//export default Navbar;













// Navbar.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// const AppNavbar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const closeNavbar = () => setExpanded(false);

//   return (
//     <Navbar expanded={expanded} bg="danger" variant="dark" expand="lg" fixed="top">
//       <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
//         TOH
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link as={Link} to="/" onClick={closeNavbar}>
//             Home
//           </Nav.Link>
//           <Nav.Link as={Link} to="/about" onClick={closeNavbar}>
//             About
//           </Nav.Link>
//           <Nav.Link as={Link} to="/contact" onClick={closeNavbar}>
//             Contact
//           </Nav.Link>
//           <Nav.Link as={Link} to="/feedback" onClick={closeNavbar}>
//             Feedback
//           </Nav.Link>
//           <Nav.Link as={Link} to="/somePage" onClick={closeNavbar}>
//             Some Page
//           </Nav.Link>
//           <Nav.Link as={Link} to="/anotherPage" onClick={closeNavbar}>
//             Another Page
//           </Nav.Link>
//           <Nav.Link as={Link} to="/yetAnotherPage" onClick={closeNavbar}>
//             Yet Another Page
//           </Nav.Link>
//           <Nav.Link as={Link} to="/lastPage" onClick={closeNavbar}>
//             Last Page
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default AppNavbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./CSS/navbar.css";

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expanded={expanded} bg="danger" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/" onClick={closeNavbar}>
        TOH
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" onClick={closeNavbar}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={closeNavbar}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={closeNavbar}>
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/feedback" onClick={closeNavbar}>
            Feedback
          </Nav.Link>
          <Nav.Link as={Link} to="/somePage" onClick={closeNavbar}>
            Some Page
          </Nav.Link>
          <Nav.Link as={Link} to="/anotherPage" onClick={closeNavbar}>
            Another Page
          </Nav.Link>
          <Nav.Link as={Link} to="/yetAnotherPage" onClick={closeNavbar}>
            Yet Another Page
          </Nav.Link>
          <Nav.Link as={Link} to="/lastPage" onClick={closeNavbar}>
            Last Page
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;














