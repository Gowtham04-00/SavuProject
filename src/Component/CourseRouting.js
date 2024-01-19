import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './Card'
import CourseVideo from './CourseVideo'
import Course from './Course'
import CourseDetails from './CourseDetails'
import CourseAdd from './CourseAdd'
import CourseUpdate from './CourseUpdate'
import CourseAdmin from './CourseAdmin'
import CourseNotes from './CourseNotes'
import VideoAdd from './VideoAdd'
import NotesAdd from './NotesAdd'
import MyLearning from './MyLearning'
import StudentVideo from './StudentVideo'
import StudentNotes from './StudentNotes'
import StudentCard from './StudentCard'
import NavComp from './NavComp'
import BodyComp from './BodyComp'
import FooterComp from './FooterComp'


const CourseRouting = () => {
    return (
        <BrowserRouter>
        <div>
        <NavComp />
     
            
                <Routes>
                <Route path="/" element={<BodyComp />} />
                    <Route path="/Card" element={<Card />} />
                    <Route path="/CourseVideo/:id" element={<CourseVideo />} />
                    <Route path="/Course" element={<Course />} />
                    <Route path="/CourseAdd" element={<CourseAdd />} />
                    <Route path="/CourseUpdate/:id" element={<CourseUpdate />} />
                    <Route path='/CourseAdmin' element={<CourseAdmin />} />
                    <Route path='/CourseDetails/:id' element={<CourseDetails />} />
                    <Route path='/CourseNotes/:id' element={<CourseNotes />} />
                    <Route path='/VideoAdd/:id' element={<VideoAdd />} />
                    <Route path='/NotesAdd/:id' element={<NotesAdd />} />
                    <Route path='/MyLearning' element={<MyLearning />} />
                    <Route path='/StudentVideo/:id' element={<StudentVideo />} />
                    <Route path='/StudentNotes/:id' element={<StudentNotes />} />
                    <Route path='/StudentCard' element={<StudentCard />} />
                    {/* Add more routes as needed */}
                </Routes>
            
        
        <FooterComp />
    </div>
    </BrowserRouter>
    )
}

export default CourseRouting;