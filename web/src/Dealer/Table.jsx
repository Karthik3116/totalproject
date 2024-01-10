//import React, { useState, useEffect } from "react";
//const Table = () => {
//  const [data, setData] = useState(null);
//  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);

//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        const response = await fetch("http://localhost:8000/getdb");
//        const result = await response.json();
//        setData(result);
//      } catch (error) {
//        console.error("Error fetching data:", error);
//        setError("Error fetching data");
//      } finally {
//        setLoading(false);
//      }
//    };

//    fetchData();
//  }, []); // Empty dependency array means this effect runs once after the initial render

//  if (loading) {

//    return <p>Loading...</p>;
//  }

//  if (error) {
//    return <p>Error: {error}</p>;
//  }

//  if (!Array.isArray(data)) {
//    return <p>Data is not an array.</p>;
//  }

//  return (
//    <div>
//      <br />
//      <br />
//      <br />
//      <br />
//      <br />
//      <br />
//      <br />
//      <h1>Your MongoDB Data</h1>
//      <div>
//        <table className="table">
//              <thead>
//                <tr>
//                  <th scope="col">#</th>
//                  <th scope="col">reh.no</th>
//                  <th scope="col">phone.no</th>
//                  <th scope="col">report</th>
//                </tr>
//              </thead>
//              <tbody>
//              {data.map((item, index) => (
//  <tr key={item._id}>
//    <th scope="row">{index + 1}</th>
//    <td>{item.registration_number}</td>
//    <td>{item.Phone_number}</td>
//    <td>{item.label}</td>
//  </tr>
//))}
//              </tbody>
//            </table>
//      </div>
//    </div>
//  );
//};

//export default Table;











// acctual code
// Table.jsx
// import React, { useState, useEffect } from "react";
// import "./Table.css"; // Import your custom styles

// const Table = () => {
//   const [data, setData] = useState(null);
//   const [isDarkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://databasetyre.run-ap-south1.goorm.io/getdb");
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`table-container ${isDarkMode ? 'dark-mode' : ''}`}>
//     <br/>
//     <br/><br/><br/><br/><br/>
//       <div className="dark-mode-toggle">
//         <button onClick={toggleDarkMode}>
//           {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </div>
//       <h1>Your MongoDB Data</h1>
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">reh.no</th>
//               <th scope="col">phone.no</th>
//               <th scope="col">report</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data &&
//               data.map((item, index) => (
//                 <tr key={item._id}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>{item.label}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Table;
// actual code
// import React, { useState, useEffect } from "react";
// import "./Table.css"; // Import your custom styles

// const Table = () => {
//   const [data, setData] = useState(null);
//   const [isDarkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://databasetyre.run-ap-south1.goorm.io/getdb");
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures that useEffect runs only once on mount

//   const toggleDarkMode = () => {
//     setDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`table-container ${isDarkMode ? 'dark-mode' : ''}`}>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className="dark-mode-toggle">
//         <button onClick={toggleDarkMode}>
//           {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </div>
//       <h1>Your MongoDB Data</h1>
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">reh.no</th>
//               <th scope="col">phone.no</th>
//               <th scope="col">report</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data &&
//               data.map((item, index) => (
//                 <tr key={item._id}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>{item.label}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Table;




















// import React, { useState, useEffect } from "react";
// import "./Table.css"; // Import your custom styles

// const Table = () => {
//   const [data, setData] = useState(null);
//   const [isDarkMode, setDarkMode] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://databasetyre.run-ap-south1.goorm.io/getdb");
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures that useEffect runs only once on mount

//   const toggleDarkMode = () => {
//     setDarkMode(!isDarkMode);
//   };

//   // Filtering data based on the search query
//   const filteredData = data
//     ? data.filter(
//         (item) =>
//           item.registration_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.Phone_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.label.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   // Pagination logic
//   const itemsPerPage = 10; // Adjust the number of items per page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Function to handle click on "View" button
//   const handleViewClick = (userName) => {
//     setSelectedUser(userName);
//   };

//   // Function to get all records for the selected user
//   const getAllRecordsForUser = () => {
//     return data.find((item) => item.registration_number === selectedUser)?.predictions || [];
//   };

//   return (
//     <div className={`table-container ${isDarkMode ? 'dark-mode' : ''}`}>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className="dark-mode-toggle">
//         <button onClick={toggleDarkMode}>
//           {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//         </button>
//       </div>
//       <h1>Your MongoDB Data</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">User Name</th>
//               <th scope="col">Last Updated Time</th>
//               <th scope="col">View</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => (
//               <tr key={item._id}>
//                 <th scope="row">{indexOfFirstItem + index + 1}</th>
//                 <td>{item.registration_number}</td>
//                 <td>{new Date(item.updatedAt).toLocaleString()}</td>
//                 <td>
//                   <button onClick={() => handleViewClick(item.registration_number)}>View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div>
//           <ul className="pagination">
//             {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
//               <li key={index} onClick={() => paginate(index + 1)}>
//                 <a href="#!">{index + 1}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Display records for the selected user */}
//       {selectedUser && (
//         <div>
//           <h2>Records for User: {selectedUser}</h2>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Date</th>
//                 <th scope="col">Image Name</th>
//                 <th scope="col">Label</th>
//               </tr>
//             </thead>
//             <tbody>
//               {getAllRecordsForUser().map((record, index) => (
//                 <tr key={record._id}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{new Date(record.date).toLocaleString()}</td>
//                   <td>{record.imageName}</td>
//                   <td>{record.label}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Table;














// // Table.jsx
// import React, { useState, useEffect } from "react";
// import "./Table.css";
// import { useNavigate } from "react-router-dom";

// const Table = () => {
//   const [data, setData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://databasetyre.run-ap-south1.goorm.io/getdb");
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleViewClick = (userName) => {
//     setSelectedUser(userName);
//     navigate(`/detail/${userName}`);
//   };

//   // Filtering data based on the search query
//   const filteredData = data
//     ? data.filter(
//         (item) =>
//           item.registration_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.Phone_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.label.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   // Pagination logic
//   const itemsPerPage = 10;
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className={`table-container`}>
//           <br/><br/><br/><br/>
//       <h1>Your MongoDB Data</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">User Name</th>
//               <th scope="col">Last Updated Time</th>
//               <th scope="col">View</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => (
//               <tr key={item._id}>
//                 <th scope="row">{indexOfFirstItem + index + 1}</th>
//                 <td>{item.registration_number}</td>
//                 <td>{new Date(item.updatedAt).toLocaleString()}</td>
//                 <td>
//                   <button onClick={() => handleViewClick(item.registration_number)}>View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div>
//           <ul className="pagination">
//             {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
//               <li key={index} onClick={() => paginate(index + 1)}>
//                 <a href="#!">{index + 1}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;



// Table.jsx
import React, { useState, useEffect } from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/getdb");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewClick = (userName) => {
    setSelectedUser(userName);
    navigate(`/detail/${userName}`);
  };

  // Filtering data based on the search query and label "cracked"
  const filteredData = data
    ? data.filter(
        (item) =>
          item.predictions.some(
            (prediction) =>
              prediction.label === "cracked" &&
              (item.registration_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.Phone_number.toLowerCase().includes(searchQuery.toLowerCase()))
          )
      )
    : [];

  // Pagination logic
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={`table-container`}>
      <br/><br/><br/><br/>
      <h1>Your MongoDB Data</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">Last Updated Time</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{indexOfFirstItem + index + 1}</th>
                <td>{item.registration_number}</td>
                <td>{new Date(item.updatedAt).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleViewClick(item.registration_number)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
              <li key={index} onClick={() => paginate(index + 1)}>
                <a href="#!">{index + 1}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
