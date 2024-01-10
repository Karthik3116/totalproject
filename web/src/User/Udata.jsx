// import React, { useState} from "react";
// import axios from "axios";

// function Udata() {
//   const [data, setData] = useState([]);  // Initialize with an empty array
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   // const [registrations, setRegistrations] = useState([]);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     // Fetch data from the server for the specific registration number
//     axios
//       .get("https://databasetyre.run-ap-south1.goorm.io/search", {
//         params: {
//           registrationNumber: registrationNumber,
//         },
//       })
//       .then((response) => {
//         const result = response.data;  // Use response.data instead of response.json()
//         console.log("Data from the server:", result);
//         // setRegistrations(result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   // Other code...

//   return (
//     <>
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>

//         {/* <h2>Registrations</h2> */}
//         {/* <table>
//           <thead>
//             <tr>
//               <th>Registration Number</th>
//             </tr>
//           </thead>
//           <tbody>
//             {registrations.map((registration) => (
//               <tr key={registration._id}>
//                 <td>{registration.registration_number}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table> */}
//       </div>
//       {/* table */}
//       <div>
//       <div>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">reh.no</th>
//                 <th scope="col">phone.no</th>
//                 <th scope="col">report</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>{item.label}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Udata;
// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import "./udata.css";
// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;
//         console.log("Data from the server:", result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "good" : "bad",
//         predictionIndex: selectedPredictionIndex,  // Include the selected prediction index in the request
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//       } else {
//         console.error("Error submitting feedback:", result.error);
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Phone No</th>
//               <th scope="col">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="5">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>
//                     {item.predictions.map((prediction, predictionIndex) => (
//                       <div key={predictionIndex} className="image-preview-container">
                       
//                         <button
//                           onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                         >
//                           View Prediction {predictionIndex + 1}
//                         </button>
//                       </div>
//                     ))}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && <Image src={`/uploads/${selectedImage}`} alt="Preview" fluid />}
//             <Form.Group controlId="feedbackForm">
//               <Form.Label>Feedback</Form.Label>
//               <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//             </Form.Group>
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label="Prediction"
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;







// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;
//         console.log("Data from the server:", result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "good" : "bad",
//         predictionIndex: selectedPredictionIndex,  // Include the selected prediction index in the request
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//       } else {
//         console.error("Error submitting feedback:", result.error);
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Phone No</th>
//               <th scope="col">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="5">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>
//                     {item.predictions.map((prediction, predictionIndex) => (
//                       <div key={predictionIndex} className="image-preview-container">
//                         <button
//                           onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                         >
//                           View Prediction {predictionIndex + 1}
//                         </button>
//                       </div>
//                     ))}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image
//                 src={`/uploads/${selectedImage}`}
//                 alt="Preview"
//                 fluid
//                 style={{ maxWidth: '59%', maxHeight: '70vh' }}
//               />
//             )}
//             <Form.Group controlId="feedbackForm" className="feedback-form">
//               <Form.Label>Feedback</Form.Label>
//               <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//             </Form.Group>
//             <div className="buttons-container">
//               <Form.Group controlId="predictionSwitchForm">
//                 <Form.Check
//                   type="switch"
//                   label="Prediction"
//                   checked={predictionSwitch}
//                   onChange={handleSwitchChange}
//                 />
//               </Form.Group>
//               {/* Add your other buttons here */}
//             </div>
//           </div>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;





// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;
//         console.log("Data from the server:", result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "good" : "bad",
//         predictionIndex: selectedPredictionIndex,  // Include the selected prediction index in the request
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//       } else {
//         console.error("Error submitting feedback:", result.error);
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Phone No</th>
//               <th scope="col">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="5">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>
//                     {item.predictions.map((prediction, predictionIndex) => (
//                       <div key={predictionIndex} className="image-preview-container">
//                         <button
//                           onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                         >
//                           View Prediction {predictionIndex + 1}
//                         </button>
//                       </div>
//                     ))}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image
//                 src={`/uploads/${selectedImage}`}
//                 alt="Preview"
//                 fluid
//               />
//             )}
//           </div>
//           <Form.Group controlId="feedbackForm" className="feedback-form">
//             <Form.Label>Feedback</Form.Label>
//             <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//           </Form.Group>
//           <div className="buttons-container">
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label="Prediction"
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//             {/* Add your other buttons here */}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;
// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;
//         console.log("Data from the server:", result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "Accurate" : "Not Accurate",
//         predictionIndex: selectedPredictionIndex,
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//       } else {
//         console.error("Error submitting feedback:", result.error);
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Phone No</th>
//               <th scope="col">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="5">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>
//                     {item.predictions.map((prediction, predictionIndex) => (
//                       <div key={predictionIndex} className="image-preview-container">
//                         <button
//                           onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                         >
//                           View Prediction {predictionIndex + 1}
//                         </button>
//                       </div>
//                     ))}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image
//                 src={`/uploads/${selectedImage}`}
//                 alt="Preview"
//                 fluid
//               />
//             )}
//           </div>
//           <Form.Group controlId="feedbackForm" className="feedback-form">
//             <Form.Label>Feedback</Form.Label>
//             <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//           </Form.Group>
//           <div className="buttons-container">
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label={predictionSwitch ? "Accurate" : "Not Accurate"}
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//             {/* Add your other buttons here */}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;
















// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;
//         console.log("Data from the server:", result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "Accurate" : "Not Accurate",
//         predictionIndex: selectedPredictionIndex,
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//         toast.success("Feedback submitted successfully");
//       } else {
//         console.error("Error submitting feedback:", result.error);
//         toast.error("Error submitting feedback");
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       toast.error("Error submitting feedback");
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Phone No</th>
//               <th scope="col">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="5">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>
//                     {item.predictions.map((prediction, predictionIndex) => (
//                       <div key={predictionIndex} className="image-preview-container">
//                         <button
//                           onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                         >
//                           View Prediction {predictionIndex + 1}
//                         </button>
//                       </div>
//                     ))}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image
//                 src={`/uploads/${selectedImage}`}
//                 alt="Preview"
//                 fluid
//               />
//             )}
//           </div>
//           <Form.Group controlId="feedbackForm" className="feedback-form">
//             <Form.Label>Feedback</Form.Label>
//             <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//           </Form.Group>
//           <div className="buttons-container">
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label={predictionSwitch ? "Accurate" : "Not Accurate"}
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;



// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;
//         console.log("Data from the server:", result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "Accurate" : "Not Accurate",
//         predictionIndex: selectedPredictionIndex,
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//         toast.success("Feedback submitted successfully");
//       } else {
//         console.error("Error submitting feedback:", result.error);
//         toast.error("Error submitting feedback");
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       toast.error("Error submitting feedback");
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Phone No</th>
//               <th scope="col">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.Phone_number}</td>
//                   <td>
//                     {item.predictions.length === 0 ? (
//                       <div>No predictions available</div>
//                     ) : (
//                       item.predictions.map((prediction, predictionIndex) => (
//                         <div key={predictionIndex} className="image-preview-container">
//                           <button
//                             onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                           >
//                             View Prediction {predictionIndex + 1}
//                           </button>
//                         </div>
//                       ))
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image src={`/uploads/${selectedImage}`} alt="Preview" fluid />
//             )}
//           </div>
//           <Form.Group controlId="feedbackForm" className="feedback-form">
//             <Form.Label>Feedback</Form.Label>
//             <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//           </Form.Group>
//           <div className="buttons-container">
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label={predictionSwitch ? "Accurate" : "Not Accurate"}
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;



// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;
//         console.log("Data from the server:", result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "Accurate" : "Not Accurate",
//         predictionIndex: selectedPredictionIndex,
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//         toast.success("Feedback submitted successfully");
//       } else {
//         console.error("Error submitting feedback:", result.error);
//         toast.error("Error submitting feedback");
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       toast.error("Error submitting feedback");
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Status</th>
//               <th scope="col">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.status === "cracked" ? "Cracked" : "Normal"}</td>
//                   <td>
//                     {item.predictions.length === 0 ? (
//                       <div>No predictions available</div>
//                     ) : (
//                       item.predictions.map((prediction, predictionIndex) => (
//                         <div key={predictionIndex} className="image-preview-container">
//                           <button
//                             onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                           >
//                             View Prediction {predictionIndex + 1}
//                           </button>
//                         </div>
//                       ))
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image src={`/uploads/${selectedImage}`} alt="Preview" fluid />
//             )}
//           </div>
//           <Form.Group controlId="feedbackForm" className="feedback-form">
//             <Form.Label>Feedback</Form.Label>
//             <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//           </Form.Group>
//           <div className="buttons-container">
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label={predictionSwitch ? "Accurate" : "Not Accurate"}
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;





// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;
//         console.log("Data from the server:", result);
//         setData(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "Accurate" : "Not Accurate",
//         predictionIndex: selectedPredictionIndex,
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//         toast.success("Feedback submitted successfully");
//       } else {
//         console.error("Error submitting feedback:", result.error);
//         toast.error("Error submitting feedback");
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       toast.error("Error submitting feedback");
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Status</th>
//               <th scope="col">Feedback</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.status === "cracked" ? "Cracked" : "Normal"}</td>
//                   <td>
//                     {item.predictions.length === 0 ? (
//                       <div>No predictions available</div>
//                     ) : (
//                       item.predictions.map((prediction, predictionIndex) => (
//                         <div key={predictionIndex} className="image-preview-container">
//                           <button
//                             onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                           >
//                             View Prediction {predictionIndex + 1}
//                           </button>
//                         </div>
//                       ))
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image src={`/uploads/${selectedImage}`} alt="Preview" fluid />
//             )}
//           </div>
//           <Form.Group controlId="feedbackForm" className="feedback-form">
//             <Form.Label>Feedback</Form.Label>
//             <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//           </Form.Group>
//           <div className="buttons-container">
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label={predictionSwitch ? "Accurate" : "Not Accurate"}
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;

















// // Udata.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;

//         if (result.length === 0) {
//           console.log("No records found for registration number:", registrationNumber);
//           setData([]);
//         } else {
//           console.log("Data from the server:", result);
//           setData(result);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleDetailsClick = (registrationNumber) => {
//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/details?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const detailsResult = response.data;
//         console.log("Details for registration number:", registrationNumber);
//         console.log("Details from the server:", detailsResult);

//         // Display details as needed
//         // You may use a modal or any other UI component to show the details
//         // For example, you can set a state to manage whether to show a modal and pass the details to it.
//       })
//       .catch((error) => {
//         console.error("Error fetching details:", error);
//       });
//   };

//   // Rest of the code remains unchanged...

//   return (
//     <>
//       {/* ... */}
//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Status</th>
//               <th scope="col">Feedback</th>
//               <th scope="col">Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="5">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>{item.status === "cracked" ? "Cracked" : "Normal"}</td>
//                   <td>
//                     {item.predictions.length === 0 ? (
//                       <div>No predictions available</div>
//                     ) : (
//                       item.predictions.map((prediction, predictionIndex) => (
//                         <div key={predictionIndex} className="image-preview-container">
//                           <button
//                             onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                           >
//                             View Prediction {predictionIndex + 1}
//                           </button>
//                         </div>
//                       ))
//                     )}
//                   </td>
//                   <td>
//                     <button onClick={() => handleDetailsClick(item.registration_number)}>
//                       View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//       {/* ... */}
//     </>
//   );
// }

// export default Udata;
// Udata.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;

//         if (result.length === 0) {
//           console.log("No records found for registration number:", registrationNumber);
//           setData([]);
//         } else {
//           console.log("Data from the server:", result);
//           setData(result);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "Accurate" : "Not Accurate",
//         predictionIndex: selectedPredictionIndex,
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//         toast.success("Feedback submitted successfully");
//       } else {
//         console.error("Error submitting feedback:", result.error);
//         toast.error("Error submitting feedback");
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       toast.error("Error submitting feedback");
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Status</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>
//                     {item.predictions.length === 0 ? (
//                       <div>No predictions available</div>
//                     ) : (
//                       item.predictions.map((prediction, predictionIndex) => (
//                         <div key={predictionIndex} className="status-container">
//                           <div>Status: {prediction.label === "cracked" ? "Cracked" : "Normal"}</div>
//                           <Button
//                             variant={prediction.label === "cracked" ? "danger" : "success"}
//                             onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                           >
//                             View Image
//                           </Button>
//                         </div>
//                       ))
//                     )}
//                   </td>
//                   <td>
//                     <Button variant="primary" onClick={() => handleImageClick(item.registration_number)}>
//                       View Details
//                     </Button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image src={`/uploads/${selectedImage}`} alt="Preview" fluid />
//             )}
//           </div>
//           <Form.Group controlId="feedbackForm" className="feedback-form">
//             <Form.Label>Feedback</Form.Label>
//             <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//           </Form.Group>
//           <div className="buttons-container">
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label={predictionSwitch ? "Accurate" : "Not Accurate"}
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;













// // Udata.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import { Modal, Button, Form, Image } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./udata.css";

// function Udata() {
//   const [data, setData] = useState([]);
//   const [registrationNumber, setRegistrationNumber] = useState("");
//   const [showImagePreview, setShowImagePreview] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [feedback, setFeedback] = useState("");
//   const [predictionSwitch, setPredictionSwitch] = useState(true);
//   const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

//   const handleSearch = () => {
//     if (!registrationNumber) {
//       console.error("Registration number is required");
//       return;
//     }

//     axios
//       .get(`https://databasetyre.run-ap-south1.goorm.io/search?registrationNumber=${registrationNumber}`)
//       .then((response) => {
//         const result = response.data;

//         if (result.length === 0) {
//           console.log("No records found for registration number:", registrationNumber);
//           setData([]);
//         } else {
//           console.log("Data from the server:", result);
//           setData(result);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const handleImageClick = (imageName, predictionIndex) => {
//     setSelectedImage(imageName);
//     setShowImagePreview(true);
//     setSelectedPredictionIndex(predictionIndex);
//   };

//   const handleCloseImagePreview = () => {
//     setShowImagePreview(false);
//     setSelectedImage(null);
//     setSelectedPredictionIndex(null);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       // Make a POST request to submit feedback
//       const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
//         registrationNumber: data[0].registration_number,
//         feedback: feedback,
//         predictionQuality: predictionSwitch ? "Accurate" : "Not Accurate",
//         predictionIndex: selectedPredictionIndex,
//       });

//       const result = response.data;

//       if (response.status === 200) {
//         console.log("Feedback submitted successfully:", result);
//         toast.success("Feedback submitted successfully");
//       } else {
//         console.error("Error submitting feedback:", result.error);
//         toast.error("Error submitting feedback");
//       }

//       // Reset the feedback field and close the modal
//       setFeedback("");
//       setShowImagePreview(false);
//     } catch (error) {
//       console.error("Error submitting feedback:", error);
//       toast.error("Error submitting feedback");
//     }
//   };

//   const handleSwitchChange = () => {
//     setPredictionSwitch(!predictionSwitch);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="App">
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />

//         <h1>Registration App</h1>
//         <label>
//           Registration Number:
//           <input
//             type="text"
//             value={registrationNumber}
//             onChange={(e) => setRegistrationNumber(e.target.value)}
//           />
//         </label>
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       {/* Display the records */}
//       <div>
//         <table className="table" style={{ borderCollapse: 'collapse', width: '100%' }}>
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Registration No</th>
//               <th scope="col">Status</th>
//               <th scope="col">Buttons</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No records found</td>
//               </tr>
//             ) : (
//               data.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.registration_number}</td>
//                   <td>
//                     {item.predictions.length === 0 ? (
//                       <div>No predictions available</div>
//                     ) : (
//                       item.predictions.map((prediction, predictionIndex) => (
//                         <div key={predictionIndex} className="status-container">
//                           Status: {prediction.label === "cracked" ? "Cracked" : "Normal"}
//                         </div>
//                       ))
//                     )}
//                   </td>
//                   <td>
//                     {item.predictions.length === 0 ? (
//                       <div>No predictions available</div>
//                     ) : (
//                       item.predictions.map((prediction, predictionIndex) => (
//                         <div key={predictionIndex} className="buttons-container">
//                           <Button
//                             variant={prediction.label === "cracked" ? "danger" : "success"}
//                             onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
//                           >
//                             View Image {predictionIndex + 1}
//                           </Button>
//                         </div>
//                       ))
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Image Preview Modal */}
//       <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Image Preview</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="image-preview-container">
//             {selectedImage && (
//               <Image src={`/uploads/${selectedImage}`} alt="Preview" fluid />
//             )}
//           </div>
//           <Form.Group controlId="feedbackForm" className="feedback-form">
//             <Form.Label>Feedback</Form.Label>
//             <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
//           </Form.Group>
//           <div className="buttons-container">
//             <Form.Group controlId="predictionSwitchForm">
//               <Form.Check
//                 type="switch"
//                 label={predictionSwitch ? "Accurate" : "Not Accurate"}
//                 checked={predictionSwitch}
//                 onChange={handleSwitchChange}
//               />
//             </Form.Group>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseImagePreview}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleSubmitFeedback}>
//             Submit Feedback
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Udata;


// Udata.jsx

import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Form, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./udata.css";

function Udata() {
  const [data, setData] = useState([]);
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [predictionSwitch, setPredictionSwitch] = useState(true);
  const [selectedPredictionIndex, setSelectedPredictionIndex] = useState(null);

  const handleSearch = () => {
    if (!registrationNumber) {
      console.error("Registration number is required");
      return;
    }

    axios
      .get(`http://localhost:8000/search?registrationNumber=${registrationNumber}`)
      .then((response) => {
        const result = response.data;

        if (result.length === 0) {
          console.log("No records found for registration number:", registrationNumber);
          setData([]);
        } else {
          console.log("Data from the server:", result);
          setData(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleImageClick = (imageName, predictionIndex) => {
    setSelectedImage(imageName);
    setShowImagePreview(true);
    setSelectedPredictionIndex(predictionIndex);
  };

  const handleCloseImagePreview = () => {
    setShowImagePreview(false);
    setSelectedImage(null);
    setSelectedPredictionIndex(null);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = async () => {
    try {
      // Make a POST request to submit feedback
      const response = await axios.post("https://databasetyre.run-ap-south1.goorm.io/submitFeedback", {
        registrationNumber: data[0].registration_number,
        feedback: feedback,
        predictionQuality: predictionSwitch ? "Accurate" : "Not Accurate",
        predictionIndex: selectedPredictionIndex,
      });

      const result = response.data;

      if (response.status === 200) {
        console.log("Feedback submitted successfully:", result);
        toast.success("Feedback submitted successfully");
      } else {
        console.error("Error submitting feedback:", result.error);
        toast.error("Error submitting feedback");
      }

      // Reset the feedback field and close the modal
      setFeedback("");
      setShowImagePreview(false);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Error submitting feedback");
    }
  };

  const handleSwitchChange = () => {
    setPredictionSwitch(!predictionSwitch);
  };

  return (
    <>
      <ToastContainer />
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Registration App</h1>
        <label>
          Registration Number:
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display the records */}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Registration No</th>
              <th scope="col">Status</th>
              <th scope="col">Buttons</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="4">No records found</td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {item.predictions.length === 0 ? (
                      <div>No predictions available</div>
                    ) : (
                      item.predictions.map((prediction, predictionIndex) => (
                        <div key={predictionIndex} className="status-container">
                          Status: {prediction.label === "cracked" ? "Cracked" : "Normal"}
                             <div className="empty-line"></div>
                        </div>
                        
                      ))
                    )}
                  </td>
                  <td>
                    {item.predictions.length === 0 ? (
                      <div>No predictions available</div>
                    ) : (
                      item.predictions.map((prediction, predictionIndex) => (
                        <div key={predictionIndex} className="buttons-container">
                          <Button
                            variant={prediction.label === "cracked" ? "danger" : "success"}
                            onClick={() => handleImageClick(prediction.imageName, predictionIndex)}
                          >
                            View Image {predictionIndex + 1}
                            
                          </Button>
                          <div className="empty-button"></div>
                        </div>
                      ))
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Image Preview Modal */}
      <Modal show={showImagePreview} onHide={handleCloseImagePreview} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="image-preview-container">
            {selectedImage && (
              <Image src={`/uploads/${selectedImage}`} alt="Preview" fluid />
            )}
          </div>
          <Form.Group controlId="feedbackForm" className="feedback-form">
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} value={feedback} onChange={handleFeedbackChange} />
          </Form.Group>
          <div className="buttons-container">
            <Form.Group controlId="predictionSwitchForm">
              <Form.Check
                type="switch"
                label={predictionSwitch ? "Accurate" : "Not Accurate"}
                checked={predictionSwitch}
                onChange={handleSwitchChange}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseImagePreview}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitFeedback}>
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Udata;
