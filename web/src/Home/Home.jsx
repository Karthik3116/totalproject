// import React from "react";
// import "./CSS/home.css";
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="box ">
//       <div className="row">
//         <div className="col-sm-4 mb-3 mb-sm-0">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">TOLL PLAZA</h5>
//               <Link to="/tollplaza" className="btn btn-danger">
//                 usere data
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">USER</h5>
//               {/* <a href="/getdb" className="btn btn-danger"> */}
//               <Link to="/Udata" className="btn btn-danger">

//                 Go somewhere
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">DEALER</h5>
//               <Link to="/getdb" className="btn btn-danger">
//                 Go somewhere
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import "./CSS/home.css";
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
//       <div className="row">
//         <div className="col-md-4 mb-4">
//           <div className="card custom-card">
//             <div className="card-body text-center">
//               <h5 className="card-title">Toll Plaza Management</h5>
//               <p className="card-text">Explore user data at toll plazas</p>
//               <Link to="/tollplaza" className="btn btn-danger">
//                 View User Data
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card custom-card">
//             <div className="card-body text-center">
//               <h5 className="card-title">User Management</h5>
//               <p className="card-text">Manage user information</p>
//               <Link to="/Udata" className="btn btn-danger">
//                 Go to User Management
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 mb-4">
//           <div className="card custom-card">
//             <div className="card-body text-center">
//               <h5 className="card-title">Dealer Management</h5>
//               <p className="card-text">Manage dealer information</p>
//               <Link to="/getdb" className="btn btn-danger">
//                 Go to Dealer Management
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import "./CSS/home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body text-center">
              <h5 className="card-title">Toll Plaza Management</h5>
              <p className="card-text">Explore user data at toll plazas</p>
              <Link to="/tollplaza" className="btn btn-danger">
                View User Data
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body text-center">
              <h5 className="card-title">User Management</h5>
              <p className="card-text">Manage user information</p>
              <Link to="/Udata" className="btn btn-danger">
                Go to User Management
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card custom-card">
            <div className="card-body text-center">
              <h5 className="card-title">Dealer Management</h5>
              <p className="card-text">Manage dealer information</p>
              <Link to="/getdb" className="btn btn-danger">
                Go to Dealer Management
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
