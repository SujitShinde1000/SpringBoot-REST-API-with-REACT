import React, { useEffect } from 'react'
import {Container, Button} from 'reactstrap'

const Home=()=>{

    useEffect(()=>{
        document.title="Home";
    },[]);
    return(
        <div className='jumbotron'  >
                    <h1>Welcome !</h1>
                    <p>This is a web application developed using SpringBoot at Backend and React at FrontEnd.</p>
                    <Container>
                        <Button color='primary' outline>Start Using</Button>
                    </Container>
        </div>
    )
}

export default Home;