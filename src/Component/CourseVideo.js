import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CourseVideo = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const [g, setG] = useState(parseInt(id));
  const z = (parseInt(id)) + 2;
  const a=(parseInt(id))
  const b=(parseInt(id))+1
  const c=(parseInt(id))+2

  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    fetchData(g);
    handleSectionClick(g)
  }, [g]);

  const see = () => {
    if (g < z) {
      setG((prevG) => prevG + 1);
    }
  };

  const reverse = () => {
    if (g > (parseInt(id))) {
      setG((prevG) => prevG - 1);
    }
  };

  const fetchData = (currentG) => {
    axios.get(`https://localhost:7028/api/module/get/${currentG}`)
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
      });
  };

  const deleteVideo = (videoId) => {
    if (window.confirm(`Do you want to DELETE COURSE with id: ${videoId}`)) {
      axios.delete(`https://localhost:7028/api/module/delete/${videoId}`)
        .then(() => {
          window.alert("Video Deleted Successfully");
          fetchData(g);
        })
        .catch((err) => {
          console.error("Error deleting video:", err);
        });
    }
  };

  return (
    <div className='container' style={{ marginTop: '50px' ,minHeight:'100vh'}}>
      
      <div
        className='row'
        style={{
          marginTop: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          padding: '10px',
        }}
      >
      


<div className='col-md-6'>
  {videos.map((video) => (
    <div key={video.id} className='embed-responsive embed-responsive-16by9' style={{ height: '400px' }}>
      <iframe
        title='YouTube Video'
        className='embed-responsive-item'
        src={`https://localhost:7028/${video.filePath}`}
        allowFullScreen
        style={{ width: '100%', height: '100%' }}
      ></iframe>
     
      <div>
        <button className='btn btn-danger' onClick={() => deleteVideo(video.id)}>
          Delete
        </button>
      </div>
    </div>
  ))}
</div>






        <div className='col-md-6'>
          <div className='notes-container' style={{textAlign:'center'}}>
            <h1><strong>Video List</strong></h1>
            <hr/>
            <div style={{marginTop:'40px'}}>
            
            <h2  style={{display:'inline',padding:'0px 10px 0px 10px', background: selectedSection === a ? 'rgb(15, 15, 15,0.2)' : 'none',
                borderRadius:selectedSection === a ? '10px' : 'none',
                }}>Introduction</h2><br></br>
              
              <h2  style={{display:'inline',padding:'0px 10px 0px 10px', background: selectedSection === b ? 'rgb(15, 15, 15,0.2)' : 'none',
                borderRadius:selectedSection === b ? '10px' : 'none',
                }}>Data Types</h2><br></br>
              
              <h2  style={{display:'inline',padding:'0px 10px 0px 10px', background: selectedSection === c ? 'rgb(15, 15, 15,0.2)' : 'none',
                borderRadius:selectedSection === c ? '10px' : 'none',
                }}>Oops </h2>
              </div>
          </div>
          <div style={{marginTop:'100px'}}>
         
          <Link to={`/VideoAdd/${g}`} className="btn btn-primary">AddVideo</Link>
          <Link to={`/CourseNotes/${id}`} className='btn ' style={{color:'black', border:'2px solid white', float:'right'}}>
          Notes
        </Link>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '40px' }}>
        <button className='btn ' onClick={reverse} style={{float:"left", color:'black', border:'2px solid white'}}>
        Previous
        </button>
        
        <button className='btn ' onClick={see} style={{float:"right", color:'black', border:'2px solid white'}}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseVideo;










// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const CourseVideo = () => {
//   const [videos, setVideos] = useState([]);
//   const { id } = useParams();
//   const till=id+2;
//   const show=id;

//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   useEffect(() => {
//     fetchData();
//   }, [id]);

//   // const see = () => {
//   //   const nextId = parseInt(id) + 1;
//   //   alert(show);
//   //   if (nextId <= 3) {
//   //     navigate(`/CourseVideo/${nextId}`); // Use navigate for navigation
//   //     setVideos([]); // Assuming you want to clear videos when navigating
//   //   }
//   // };  

//   const see = () => {
//     if (show < till) {
//       setShow(show + 1);
//     } else {
//       setShow(1);
//     }
//   };

//   const reverse = () => {
//     if (show > id) {
//       setShow(show + 1);
//     } else {
//       setShow(1);
//     }
//   };




//   // const reverse = () => {
//   //   const previousId = parseInt(id) - 1;
//   //   if (previousId >= 1) {
//   //     navigate(`/CourseVideo/${previousId}`);
//   //     setVideos([]);
//   //   }
//   // };


  

//   const fetchData = () => {
//     axios.get(`https://localhost:7028/api/module/get/${show}`)
//       .then((res) => {
//         setVideos(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching videos:", err);
//       });
//   };

//   const deleteVideo = (id) => {
//     if (window.confirm(`Do you want to DELETE COURSE with id: ${id}`)) {
//       axios.delete(`https://localhost:7028/api/module/delete/${id}`)
//         .then(() => {
//           window.alert("Course Deleted Successfully");
//           fetchData();
//         })
//         .catch((err) => {
//           console.error("Error deleting video:", err);
//         });
//     }
//   };

//   return (
//     <div className='container' style={{ marginTop: '50px' }}>
//       <div>
//         <Link to={`/CourseNotes/${id}`} className='btn btn-primary blue'>
//           Notes
//         </Link>
//         <Link to={`/VideoAdd/${id}`}  class="btn btn-primary" style={{float:'right'}}>AddVideo</Link>
//       </div>
//       <div
//         className='row'
//         style={{
//           marginTop: '20px',
//           boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//           borderRadius: '5px',
//           padding: '10px',
//         }}
//       >
//         <div className='col-md-6'>
//           <div className='embed-responsive embed-responsive-16by9' style={{ height: '300px' }}>
//             {videos.map((video) => (
//               <iframe
//                 key={video.id}
//                 title='YouTube Video'
//                 className='embed-responsive-item'
//                 src={`https://localhost:7028/${video.filePath}`}
//                 allowFullScreen
//                 style={{ width: '100%', height: '100%' }}
//               ></iframe>
//             ))}
//           </div>
//         </div>
//         <div className='col-md-6'>
//           <div className='notes-container'>
//             <h1>JAVA</h1>
//             <ul>
//               <li>
//                 <h2>Introduction</h2>
//               </li>
//               <li>
//                 <h2>Data Types</h2>
//               </li>
//               <li>
//                 <h2>JVM and JRE</h2>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div style={{ marginTop: '20px' }}>
//       <p>Show: {id}</p>
//         <button className='btn btn-primary' onClick={reverse} style={{ float: 'left' }}>
//           Previous
//         </button>
//         <button className='btn btn-primary' onClick={see}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseVideo;
