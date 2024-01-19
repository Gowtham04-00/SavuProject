import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './External.css';

const CourseDetails = () => {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllRows, setShowAllRows] = useState(false);
  const {id} =useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    
    axios.get(`https://localhost:7028/api/course/GetNotesById/${id}`).then((res) => {
      setProduct(res.data);
      
    }).catch((err) => {});
  };

  const deleteProduct = (id) => {
    if (window.confirm(`Do you want to DELETE COURSE with id: ${id}`)) {
      axios.delete(`https://localhost:7121/api/course/delete/${id}`).then(() => {
        window.alert('Course Deleted Successfully');
        fetchData();
      }).catch((err) => {});
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const filteredProducts = product.filter((val) =>
    val.cName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleRows = showAllRows ? filteredProducts : filteredProducts.slice(0, 4);

  return (
    <div style={{textAlign:"center", margin:"30px"}}>
        
      {/* Search Bar */}
      
      
        
          {visibleRows.map((val, index) => (
            <div key={index} style={{color:'white'}}>
              
              <h1>Description</h1>
              <p style={{color:'black', fontSize:'18px'}}>{val.cDescription}</p>
              <h1>Prerequisites</h1>
              <p style={{color:'black' , fontSize:'18px'}}>{val.cPre}</p>
              <h1>Out Come</h1>
              <p style={{color:'black', fontSize:'18px'}}>{val.outCome}</p>
            </div>
          ))}
        

      
      
    </div>
  );
};

export default CourseDetails;
