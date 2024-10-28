import React,{useState} from 'react'
import useCourseStore from '../hooks/zustand'
function CourseForm() {
    const addCourse=useCourseStore((state)=>state.addCourses);
    const [courseTitle,setCourseTitle]=useState("");

    const handleSubmit=()=>{
        if(!courseTitle) return Alert("Please add the name of the course")

            addCourse({
                id:Math.ceil(Math.random()*100000),
                title:courseTitle

            })
    }

  return (
    <>
    <div>CourseForm</div>
    <div className="form-container">
        <input value={courseTitle} onChange={(e)=>setCourseTitle(e.target.value)} type="text" className="courese-title" />
        <butoon onClick={()=>handleSubmit()} className="form-submit-btn">Add Course</butoon>
    </div>
    </>
  )
}

export default CourseForm