import logo from './logo.svg';
import './App.css';
import {Button, Container, Row, Col} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menu from './components/Menu';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Origin: POST, GET, OPTIONS, PUT, DELETE');
//header('Access-Control-Allow-Origin: Content-Type, X-Auth-Token, Origin, Authorization');

const cors = require("cors")
//app.use(
  cors({
    origin: "http://localhost:8080"
  })
//)

function App() { 

  const btnHandle =()=>{
      toast.success("Done!!", {position:'top-center'})
  };
  return (
    <div>
      <Router>
      <ToastContainer />
      
      <Container>
        <Header />
          <Row>
            <Col md={4}>
              <Menu />

            </Col>
            <Col md={8}>

              <Routes>
              <Route path="/" Component={Home}  exact/>
              <Route path="/add-course" Component={AddCourse} exact />
              <Route path="/view-courses" Component={AllCourse} exact />


              </Routes>

              
              

            </Col>
          </Row>
      </Container>

      </Router>

      
       
    </div>
    
  );
}

export default App;
