import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

const CourseUpdate = () => {
  const { id } = useParams();
  const nav = useNavigate();

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

  useEffect(() => {
    axios.get(`https://localhost:7028/api/course/update/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const [errors, setErrors] = useState({});

  const inputHandler = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: undefined });
  };

  const updateProduct = (event) => {
    event.preventDefault();

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

    const startDateTimestamp = Date.parse(product.startDate);
    const currentDateTimestamp = Date.now(); // Get the current date timestamp

    // Check if the start date is greater than the current date
    // if (startDateTimestamp <= currentDateTimestamp) {
    //   setErrors({
    //     ...newErrors,
    //     startDate: 'Not Valid.',
    //   });
    //   return;
    // }

    // Check if the start date is greater than or equal to the end date
    if (startDateTimestamp >= Date.parse(product.endDate)) {
      setErrors({
        ...newErrors,
        endDate: 'Must be greater than Start Date.',
      });
      return;
    }

    setErrors({});

    axios.put(`https://localhost:7028/api/course/update/${id}`, product)
      .then(() => {
        window.alert('Course Updated successfully');
        nav('/CourseAdmin');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ width: '450px', border: '3px ', boxShadow: '1.02px 1.02px 5px #888888', padding: '20px' }} onSubmit={updateProduct}>
        <div className='form-group'>
          <h1 style={{ textAlign: 'center' }}>Update Course</h1>
          <label className='form-label'>Enter Course Name</label>
          <input type='text' name='cName' className='form-control' onChange={inputHandler} value={product.cName} />
          {errors.cName && <span style={{ color: 'red' }}>{errors.cName}</span>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Enter Course Duration</label>
          <input type='text' name='cDuration' className='form-control' onChange={inputHandler} value={product.cDuration} />
          {errors.cDuration && <span style={{ color: 'red' }}>{errors.cDuration}</span>}
        </div>

        <div className='form-group'>
            <label className='form-label'>Enter Course Start Date</label>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* <input type='date' name='startDate' className='form-control' onChange={inputHandler} value={product.startDate} /> */}
              
              
              <input
  type='date'
  name='startDate'
  className='form-control'
  onChange={inputHandler}
  value={moment(product.startDate).format('YYYY-MM-DD')}
/>
              
              
              
              {errors.startDate && <span style={{ color: 'red' }}>{errors.startDate}</span>}
            </div>
          </div>

        <div className='form-group'>                
          <label className='form-label'>Enter Course End Date</label>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input type='date' name='endDate' className='form-control' onChange={inputHandler} value={moment(product.endDate).format('YYYY-MM-DD')} />
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
          <input type='text' name='cDescription' className='form-control' onChange={inputHandler} value={product.cDescription}/>
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

        <button type='submit' className='btn btn-primary mt-2'>
          Update
        </button>
      </form>
    </div>
  );
};

export default CourseUpdate;