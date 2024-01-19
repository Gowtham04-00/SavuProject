import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './External.css';

const MyLearning = () => {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllRows, setShowAllRows] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('https://localhost:7028/api/course/GetStudentCourse/1').then((res) => {
      setProduct(res.data);
    }).catch((err) => {});
  };

  

  return (
    <div>
           
     
          {product.map((val, index) => (
            <div key={index} >
              <h1>{val.cName}</h1>
            </div>
          ))}
        
    </div>
  );
};

export default MyLearning;