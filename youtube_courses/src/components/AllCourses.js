import React, { useState, useEffect } from 'react'
import Course from './Course'
import base_url from '../api/bootapi';
import axios from 'axios'
import { Toast } from 'reactstrap';
import { toast } from 'react-toastify'



const AllCourse=()=>{

    useEffect(()=>{
        document.title = "All Courses";
        getAllCoursesFromServer();
    }, []);

    //function to call server:
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                //console.log(response);
                console.log(response.data)
                
                toast.success("courses has been loaded", {
                    position:"top-right"
                });
             setCourses(response.data);

            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };

    //calling loading course function
   

    const[courses,setCourses] = useState([
   //     {title:"Java Course", description:"this is java course"},
   //     {title:"React Course", description:"this is react course"},
   //     {title:"Python Course", description:"this is python course"},
   //     {title:"Angular Course", description:"this is angular course"}

    ])

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id != id));
    }

    return(
        <div>
            <h1>All Course</h1>
            <p>List of courses are as follows</p>

            {
                    courses.length>0?  courses.map((item)=>(
                        <Course key={item.id} course={item} update={
                            updateCourses}/>
                    )): "No courses"
            }
            

        </div>

    )
}

export default AllCourse;