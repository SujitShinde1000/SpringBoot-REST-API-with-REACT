import React from "react";
import {Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    CardFooter, 
    Button, 
    Container} from "reactstrap";

    import axios from "axios";
    import base_url from "../api/bootapi";
    import {toast} from 'react-toastify'

    const Course=({course})=>{
        const deleteCourse=(id)=>{
            axios.delete(`${base_url}/courses/${id}`).then(
                (response)=>{
                    toast.success("course deleted");

                     

                },
                (error)=>{
                    toast.error("course not deleted ! server problem")

                }
            )
        }
        return(
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle className="JavaSubtitle">{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className="text-center">
                        <Button color="danger " onClick={()=>{
                            deleteCourse(course.id);
                        }} >Delete</Button>
                        <Button color="warning"  >Update</Button>
                    </Container>
                </CardBody>
            </Card>
        )

    }

    export default Course;
