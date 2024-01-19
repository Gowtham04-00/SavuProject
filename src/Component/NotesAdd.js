import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const NotesAdd = () => {
  const [file, setFile] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();

  const fileHandler = (event) => {
    const selectedFile = event.target.files[0];

    // Check if a file is selected
    if (selectedFile) {
      // Check if the selected file is a PDF
      if (selectedFile.type === 'application/pdf') {
        // File is a PDF, proceed with setting the file
        setFile(selectedFile);
      } else {
        // File is not a PDF, show an error or handle it accordingly
        window.alert('Please select a valid PDF file.');
        event.target.value = null; // Clear the input value
      }
    }
  };

  const addData = (event) => {
    event.preventDefault();

    if (!file) {
      window.alert('Please select a PDF file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', id); // Assuming the backend expects the file with the key 'file'

    // Assuming your API endpoint supports POST requests for file uploads
    axios.post("https://localhost:7028/api/notes/UploadNotes", formData)
      .then(() => {
        window.alert("Notes uploaded successfully");
        nav(`/CourseNotes/${id}`);
      })
      .catch((err) => {
        console.error("Error uploading notes", err);
      });
  };

  return (
    <div>
      <form onSubmit={addData}>
        <div className="text-center">
          <h1>File Upload</h1>

          <div className="container">
            <div className="mb-3 mt-3">
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Upload PDF File
                </label>
                <input
                  type="file"
                  accept=".pdf" // Allow only PDF files
                  name="file"
                  id="file"
                  className="form-control"
                  onChange={fileHandler}
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NotesAdd;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useParams, useNavigate } from 'react-router-dom';

// const NotesAdd = () => {
//   const [file, setFile] = useState(null);
//   const { id } = useParams();
//   const nav = useNavigate();
//   const fileHandler = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const addData = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('id', id); // Assuming the backend expects the file with the key 'file'

//     // Assuming your API endpoint supports POST requests for file uploads
//     axios.post("https://localhost:7028/api/notes/UploadNotes", formData)
//       .then(() => {
//         window.alert("Notes uploaded successfully");
//         nav(`/CourseNotes/${id}`);
//       })
//       .catch((err) => {
//         console.error("Error uploading video", err);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={addData}>
//         <div className="text-center">
//           <h1>File Upload</h1>

//           <div className="container">
//             <div className="mb-3 mt-3">
//               <div className="mb-3">
//                 <label htmlFor="file" className="form-label">
//                   Upload File
//                 </label>
//                 <input
//                   type="file"
//                   name="file"
//                   id="file"
//                   className="form-control"
//                   onChange={fileHandler}
//                 />
//               </div>

//               <div className="mb-3">
//                 <button type="submit" className="btn btn-primary">
//                   Upload
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NotesAdd;
    
    
    // import React, { useState } from 'react';
    // import { useParams } from 'react-router-dom'; // Import useParams from React Router
    // import axios from 'axios';
    
    // const VideoAdd = () => {
    //   const [file, setFile] = useState(null);
    //   // const { id } = useParams(); // Extract id from the URL params
    //   const fileHandler = (event) => {
    //     setFile(event.target.files[0]);
    //   };
    
    //   const addData = (event) => {
    //     event.preventDefault();
    
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     // formData.append('id',id.toString) // Assuming the backend expects the file with the key 'file'
    
    //     // Append the id to the API endpoint
    //     axios.post(`https://localhost:7028/api/module/uploadvideo`, formData)
    //       .then(() => {
    //         window.alert("Video uploaded successfully");
    //       })
    //       .catch((err) => {
    //         console.error("Error uploading video", err);
    //       });
    //   };
    
    //   return (
    //     <div>
    //       <form onSubmit={addData}>
    //         <div className="text-center">
    //           <h1>File Upload</h1>
    
    //           <div className="container">
    //             <div className="mb-3 mt-3">
    //               <div className="mb-3">
    //                 <label htmlFor="file" className="form-label">
    //                   Upload File
    //                 </label>
    //                 <input
    //                   type="file"
    //                   name="file"
    //                   id="file"
    //                   className="form-control"
    //                   onChange={fileHandler}
    //                 />
    //               </div>
    
    //               <div className="mb-3">
    //                 <button type="submit" className="btn btn-primary">
    //                   Upload
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   );
    // };
    
    // export default VideoAdd;
    
    
    
    
    

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('id', id); // Assuming the backend expects the file with the key 'file'

//     // Assuming your API endpoint supports POST requests for file uploads
//     axios.post("https://localhost:7028/api/notes/UploadNotes", formData)
//       .then(() => {
//         window.alert("Video uploaded successfully");
//       })
//       .catch((err) => {
//         console.error("Error uploading video", err);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={addData}>
//         <div className="text-center">
//           <h1>File Upload</h1>

//           <div className="container">
//             <div className="mb-3 mt-3">
//               <div className="mb-3">
//                 <label htmlFor="file" className="form-label">
//                   Upload File
//                 </label>
//                 <input
//                   type="file"
//                   name="file"
//                   id="file"
//                   className="form-control"
//                   onChange={fileHandler}
//                 />
//               </div>

//               <div className="mb-3">
//                 <button type="submit" className="btn btn-primary">
//                   Upload
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NotesAdd;







