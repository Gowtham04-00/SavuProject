import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { Link } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const StudentNotes = () => {
  const [notes, setNotes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    axios.get(`https://localhost:7028/api/notes/get/${id}`)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
      });
  };

  const deleteNote = (id) => {
    if (window.confirm(`Do you want to DELETE NOTE with id : ${id}`)) {
      axios.delete(`https://localhost:7028/api/notes/delete/${id}`)
        .then(() => {
          window.alert("Note Deleted Successfully");
          fetchData();
        })
        .catch((err) => {
          console.error("Error deleting note:", err);
        });
    }
  };

  return (
    <div style={{textAlign:'center', margin:'30px', height:'100vh'}}>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {/* <p>{note.title} - {note.fileSize} KB</p> */}
            <object data={`https://localhost:7028/${note.filePath}`} type="application/pdf" width="80%" height="500px">
            <p>Your browser does not support viewing PDF files. Please download the PDF to view it.</p>
            </object>
            
            
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default StudentNotes;
