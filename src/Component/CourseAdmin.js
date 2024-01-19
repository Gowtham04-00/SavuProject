import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import DeleteRoundedIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './External.css';

const CourseAdmin = () => {
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

  const deleteProduct = (id) => {
    if (window.confirm(`Do you want to DELETE COURSE with id: ${id}`)) {
      axios.delete(`http://localhost:7028/api/course/delete/${id}`).then(() => {
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
            <CiSearch style={{ fontSize: '30px' }} />
            </span>
          </div>
        </div>
      </div>
      <Link to={`/CourseAdd`}  class="btn btn-primary" style={{float:'right'}}>Add</Link>
      {/* Table */}
      <table className="table table-hover table-bordered">
        <thead>
          <tr style={{height:'50px', textAlign:'center', fontSize:'18px'}}>
            <th>SNo</th>
            <th>Course Name</th>
            <th>Course Duration</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Availability</th>
            <th>Details</th>
            <th>Action</th>  
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
              <td>
                                
                            <Link to={`/CourseUpdate/${val.cId}`} className='btn btn-primary'>Edit</Link>&nbsp;&nbsp;&nbsp;&nbsp;



                                <button  className='btn btn-danger ' style={{width:'60px'}} onClick={()=>deleteProduct(val.cId)}>Delete</button>
                            </td>
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

export default CourseAdmin;