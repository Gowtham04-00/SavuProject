import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CourseVideo = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  const [g, setG] = useState(parseInt(id));
  const z = (parseInt(id)) + 2;
  const a=(parseInt(id));
  const b=(parseInt(id))+1;
  const c=(parseInt(id))+2;
  const show=1;


  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };




  useEffect(() => {
    fetchData(g);

    handleSectionClick(g)



  }, [g]);

  useEffect(() => {
    fetcData(show);
  }, [show]);

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

  const fetcData = () => {
    axios.get(`https://localhost:7028/api/student/GetStudentbyid/${show}`)
      .then((res) => {
        setVideo(res.data);
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
    <div className='container' style={{ marginTop: '50px' ,minHeight:'100vh'}} >
      
      <div
        className='row'
        style={{
          marginTop: '20px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '5px',
          padding: '10px',
        }}
      >

        <div>
        {video.map((vide) => (
    <div key={video.id} className='embed-responsive embed-responsive-16by9' >
      <h1>{vide.sName}</h1>
     <h2> {vide.sId}</h2>
     <h2>{vide.cName}</h2>
    </div>
  ))}
        </div>
      


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
         
          
          <Link to={`/StudentNotes/${id}`} className='btn ' style={{color:'black', border:'2px solid white', float:'right'}}>
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

