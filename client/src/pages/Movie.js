import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';  
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Movie() {
  const location = useLocation()

  const[letter, setLetter] = useState('')
  const[name, setName] = useState('')
  const[year, setYear] = useState('')
  const[production, setProduction] = useState('')
  const[category, setCategory] = useState('')
  const[poster, setPoster] = useState('')
  const[description, setDescrip] = useState('')
  const[wstatus, setWStatus] = useState('')
  const[myrank, setMyrank] = useState('')

  const[data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await axios.get("http://localhost:8000/AddMovie");
      console.log(response.data)
      setData(response.data);
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className='Movie-Page'>

      <Container style={{
        display:'flex',
        flexDirection:'row',
        rowGap:'10px',
        justifyContent:'center'
      }}>

        <Row>
      
      {data.map(item => (
        <div className='movie-palet'>
          <div className='top-side'>
            <div key={item.id}>{item.name}</div>
            <div key={item.id}>{item.year}</div>
          </div>
          <div className='middle-side'>
            <div className='poster'>
              <img src={item.poster}/>
            </div>
            <div className='description'>
              <div key={item.id}>{item.category}</div>
              <div key={item.id}>{item.production}</div>
              <div key={item.id}>{item.description}</div>
              <div key={item.id}>{item.myrank}</div>
            </div>

          </div>
          
          
        </div>
      ))} 

</Row>

      </Container>






{/* <div key={item.name}><img src={data.poster}/></div>
        <div key={item.name}>{data.year}</div> */}
        


{/* {data.map(item => (
        <div key={item.name}>{item.name}</div>
      ))} */}

        {/* if({location.state.id} == 'Fast X'){
            <div className='movie-palet'>
            <div className='image'>
              <h4>{location.state.id}</h4>
                <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" style={{width:'100%',height:'88%'}}/>
            </div>
          </div>
        } */}
            
           

            <div className='add'>
              <Link to="/AddMovie">
              <Button
                style={{
                  backgroundColor:'black',
                  border:'none',
                  padding:'10px',
                }}
              >
                <i class="bi bi-plus-circle-fill" style={{fontSize:'38px'}}></i>
                </Button>
                </Link>
            </div>
        
      
      
        
    </div>
  )
}

export default Movie