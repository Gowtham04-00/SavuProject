import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseAdd = () => {
  const nav = useNavigate();

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [product, setProduct] = useState({
    cName: '',
    cDuration: '',
    startDate: '',
    endDate: '',
    cAvailability: '',
    cDescription: '',
    cPre: '',
    outCome: '',
  });

  const [errors, setErrors] = useState({});

  const inputHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: undefined });
  };

  const addData = (event) => {
    event.preventDefault();

    // Your validation logic before making the API call
    const requiredFields = [
      { field: 'cName', label: 'Name', type: 'string' },
      { field: 'cDuration', label: 'Duration', type: 'string' },
      { field: 'startDate', label: 'Start Date', type: 'string' },
      { field: 'endDate', label: 'End Date', type: 'string' },
      { field: 'cAvailability', label: 'Availability', type: 'string' },
      { field: 'cDescription', label: 'Description', type: 'string' },
      { field: 'cPre', label: 'Pre', type: 'string' },
      { field: 'outCome', label: 'OutCome', type: 'string' },
    ];

    const newErrors = {};
    requiredFields.forEach(({ field, label, type }) => {
      if (!product[field]) {
        newErrors[field] = `Please enter ${label}.`;
      } else if (type === 'string' && !isNaN(product[field])) {
        newErrors[field] = `${label} must be in Alphabet.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check if the end date is greater than the start date
    if (new Date(product.endDate) <= new Date(product.startDate)) {
      setErrors({
        ...newErrors,
        endDate: 'Must be greater than Start Date.',
      });
      return;
    }

    // Check if the start date is greater than the current date
    if (new Date(product.startDate) <= new Date(getCurrentDate())) {
      setErrors({
        ...newErrors,
        startDate: 'Not Valid.',
      });
      return;
    }

    // Reset errors in case of a successful submission
    setErrors({});

    // Make your API call using axios
    axios.post('https://localhost:7028/api/course/create', product)
      .then(() => {
        window.alert('Course added Successfully');
        nav('/CourseAdmin');
      })
      .catch((err) => {
        // Handle errors from the server
        if (err.response && err.response.data) {
          setErrors(err.response.data.errors);
        }
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
<form style={{ width: '450px', border: '3px ', boxShadow: '1.02px 1.02px 5px #888888', padding: '20px' }} onSubmit={addData}>        <div className='form-group'>
          <h1 style={{ textAlign: 'center' }}>Add Course</h1>
          <label className='form-label'>Enter Course Name</label>
          <input type='text' name='cName' className='form-control' onChange={inputHandler} value={product.cName} />
          {errors.cName && <span style={{ color: 'red' }}>{errors.cName}</span>}
        </div>

        <div className='form-group'>
          <label className='form-label mt-3'>Enter Course Duration</label>
          <input type='text' name='cDuration' className='form-control' onChange={inputHandler} value={product.cDuration} />
          {errors.cDuration && <span style={{ color: 'red' }}>{errors.cDuration}</span>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Enter Course Start Date</label>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input type='date' name='startDate' className='form-control' onChange={inputHandler} value={product.startDate} />
            {errors.startDate && <span style={{ color: 'red' }}>{errors.startDate}</span>}
          </div>
        </div>

        <div className='form-group'>                
          <label className='form-label'>Enter Course End Date</label>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input type='date' name='endDate' className='form-control' onChange={inputHandler} value={product.endDate} />
            {errors.endDate && <span style={{ color: 'red' }}>{errors.endDate}</span>}
          </div>
        </div>

        <div className='form-group'>  
          <label className='form-label'>Enter Course Availability</label>
          <input type='text' name='cAvailability' className='form-control' onChange={inputHandler} value={product.cAvailability} />
          {errors.cAvailability && <span style={{ color: 'red' }}>{errors.cAvailability}</span>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Enter Course Description</label>
          <input type='text' name='cDescription' className='form-control' onChange={inputHandler} value={product.cDescription} />
          {errors.cDescription && <span style={{ color: 'red' }}>{errors.cDescription}</span>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Enter Course Prerequisite</label>
          <input type='text' name='cPre' className='form-control' onChange={inputHandler} value={product.cPre} />
          {errors.cPre && <span style={{ color: 'red' }}>{errors.cPre}</span>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Enter Course OutCome</label>
          <input type='text' name='outCome' className='form-control' onChange={inputHandler} value={product.outCome} />
          {errors.outCome && <span style={{ color: 'red' }}>{errors.outCome}</span>}
        </div>

        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
      </form>
    </div>
  );
};

export default CourseAdd;