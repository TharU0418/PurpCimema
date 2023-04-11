import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';  
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function Movie() {
  return (
    <div className='Movie-Page'>

        <Container style={{
          display:'flex',
          flexDirection:'row wrap',
          justifyContent:'center'
        }}>

            <div className='movie-palet'>
              <div className='image'>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" style={{width:'100%',height:'88%'}}/>
              </div>
            </div>
            <div className='movie-palet'>
              <div className='image'>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" style={{width:'100%',height:'88%'}}/>
              </div>
            </div>
            <div className='movie-palet'>
              <div className='image'>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" style={{width:'100%',height:'88%'}}/>
              </div>
            </div>
            <div className='movie-palet'>
              <div className='image'>
                  <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" style={{width:'100%',height:'88%'}}/>
              </div>
            </div>

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
        </Container>
      
      
        
    </div>
  )
}

export default Movie