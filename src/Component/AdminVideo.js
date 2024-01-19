import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AdminVideo = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    fetchData();
  }, [id]);

  const see = () => {
    const nextId = parseInt(id) + 1;
    if (nextId <= 3) {
      navigate(`/CourseVideo/${nextId}`); // Use navigate for navigation
      setVideos([]); // Assuming you want to clear videos when navigating
    }
  };

  const reverse = () => {
    const previousId = parseInt(id) - 1;
    if (previousId >= id) {
      navigate(`/CourseVideo/${previousId}`); // Use navigate for navigation
      setVideos([]); // Assuming you want to clear videos when navigating
    }
  };

  const fetchData = () => {
    axios.get(`https://localhost:7121/api/module/get/${id}`)
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
      });
  };

  const deleteVideo = (id) => {
    if (window.confirm(`Do you want to DELETE COURSE with id: ${id}`)) {
      axios.delete(`https://localhost:7028/api/module/delete/${id}`)
        .then(() => {
          window.alert("Course Deleted Successfully");
          fetchData();
        })
        .catch((err) => {
          console.error("Error deleting video:", err);
        });
    }
  };

  return (
    <div className='container' style={{ marginTop: '50px' }}>
      <div>
        <Link to={`/CourseNotes/${id}`} className='btn btn-primary blue'>
          Notes
        </Link>
      </div>
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
          <div className='embed-responsive embed-responsive-16by9' style={{ height: '300px' }}>
            {videos.map((video) => (
              <iframe
                key={video.id}
                title='YouTube Video'
                className='embed-responsive-item'
                src={`https://localhost:7121/${video.filePath}`}
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
              ></iframe>
            ))}
          </div>
        </div>
        <div className='col-md-6'>
          <div className='notes-container'>
            <h1>JAVA</h1>
            <ul>
              <li>
                <h2>Introduction</h2>
              </li>
              <li>
                <h2>Data Types</h2>
              </li>
              <li>
                <h2>JVM and JRE</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
      <p>Show: {id}</p>
        <button className='btn btn-primary' onClick={reverse} style={{ float: 'left' }}>
          Previous
        </button>
        <button className='btn btn-primary' onClick={see}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminVideo;
