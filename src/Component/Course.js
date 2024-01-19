import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './External.css';

const Course = () => {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllRows, setShowAllRows] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://localhost:7028/api/course/getnotes').then((res) => {
      setProduct(res.data);
    }).catch((err) => {});
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
    <div style={{minHeight:'100vh'}}>
        
      {/* Search Bar */}
      <div className="d-flex justify-content-center my-3">
        <div className="input-group" style={{ width: '300px' }}>
          <input
            type="text"
            placeholder="Search by course name"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
            <CiSearch style={{ fontSize: '30px' }}/>
            </span>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table table-hover table-bordered" >
        <thead>
          <tr style={{height:'50px', textAlign:'center', fontSize:'18px'}}>
            <th>SNo</th>
            <th>Course Name</th>
            <th>Course Duration</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Availability</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((val, index) => (
            <tr key={index} className="table-row-zoom">
              <td>{index + 1}</td>
              <td>{val.cName}</td>
              <td>{val.cDuration}</td>
              <td>{formatDate(val.startDate)}</td>
              <td>{formatDate(val.endDate)}</td>
              <td>{val.cAvailability}</td>
              <td><Link to={`/CourseDetails/${val.cId}`} className='btn btn-primary' >More</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to show all rows */}
      {!showAllRows && filteredProducts.length > 4 && (
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => setShowAllRows(true)}
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default Course;