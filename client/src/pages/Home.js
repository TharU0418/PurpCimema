import React, { useEffect, useState } from 'react'
import CarouselContainer from "../components/CarouselContainer";
import {Container, Row, Col, Button} from 'react-bootstrap';  
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Home() {

    
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


    return(
        <div>
            
            <CarouselContainer/> 
            <Container
                style={{
                    marginBottom:'40px'
                }}
            >
                <Row>
                 <Col>
                    <Button
                        style={{
                            width:"100%",
                            height:"200px",
                            backgroundColor:'#C239E7'
                        }}
                    ><img src="https://i.scdn.co/image/ab6761610000e5ebc698d53b77db34027b00f853" style={{width:'100%', height:'100%'}}/>
                    </Button>
                 </Col>
                 <Col>
                    <Button
                        style={{
                            width:"100%",
                            height:"200px",
                            backgroundColor:'#C239E7'
                        }}
                    ><img src="https://deadline.com/wp-content/uploads/2022/08/Netflix_Symbol_logo.jpg?w=1024" style={{width:'100%', height:'100%'}}/></Button>
                 </Col>
                 <Col>
                    <Button
                        style={{
                            width:"100%",
                            height:"200px",
                            backgroundColor:'#C239E7'
                        }}
                    ><img src="https://images.news18.com/ibnlive/uploads/2021/10/amazon-prime.jpg" style={{width:'100%', height:'100%'}}/></Button>
                 </Col>
                 <Col>
                    <Button
                    style={{
                            width:"100%",
                            height:"200px",
                            backgroundColor:'#C239E7'
                        }}  
                    ><img src="https://static.vecteezy.com/system/resources/previews/019/550/621/original/marvel-logo-free-download-free-vector.jpg" style={{width:'100%', height:'100%'}}/></Button>
                 </Col>
                 <Col>
                    <Button
                        style={{
                            width:"100%",
                            height:"200px",
                            backgroundColor:'#C239E7'
                        }}
                    ><img src="https://static.dc.com/2022-06/dc_logo16x9.png" style={{width:'100%', height:'100%'}}/></Button>
                 </Col>
                </Row>
            </Container>
            <Container>
                <Row style={{
                    marginBottom:'40px'
                }}>
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}}>Disney</h4>
                    <Col style={{
                        display:'flex',
                        
                    }}>
                        
                            {data.map(item => {
                                if (item.production === 'Disney') {
                                return (
                                    <div className="poster-container" style={{backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>
                                        <React.Fragment key={item.id}>
                                        <div>{item.name}</div>
                                        <div className='poster'>
                                            <img src={item.poster} alt={item.name} />
                                        </div>
                                        </React.Fragment>
                                    </div>
                                );
                                } else {
                                return null; // or any other fallback if you don't want to render anything
                                }
                            })}
                        
                    </Col>
                </Row>
                <Row style={{
                    marginBottom:'40px'
                }}>
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}}>Nteflix</h4>
                    <Col style={{
                        display:'flex'
                    }}>
                            {data.map(item => {
                                if (item.production === 'Netflix') {
                                return (
                                    <div className="poster-container" style={{ backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>
                                    <React.Fragment key={item.id}>
                                    <div>{item.name}</div>
                                    <div className='poster'>
                                        <img src={item.poster} alt={item.name}/>
                                    </div>
                                    </React.Fragment>
                                    </div>
                                );
                                } else {
                                return null; // or any other fallback if you don't want to render anything
                                }
                            })}
                    </Col>
                </Row>
                <Row style={{
                    marginBottom:'40px'
                }}>
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}}>Amozen Prime</h4>
                    <Col style={{
                        display:'flex'
                    }}>
                            {data.map(item => {
                                if (item.production === 'Amozen Prime') {
                                return (
                                    <div className="poster-container" style={{ width: '100%', height: '100%', backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>

                                    <React.Fragment key={item.id}>
                                    <div>{item.name}</div>
                                    <div className='poster'>
                                        <img src={item.poster} alt={item.name} />
                                    </div>
                                    </React.Fragment>
                                    </div>
                                );
                                } else {
                                return null; // or any other fallback if you don't want to render anything
                                }
                            })}
                        
                    </Col>
                </Row>
                <Row style={{
                    marginBottom:'40px'
                }}>
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}}>Marvel</h4>
                    <Col style={{
                        display:'flex'
                    }}>
                            {data.map(item => {
                                if (item.production === 'Marvel') {
                                return (
                                    <div className="poster-container" style={{ width: '100%', height: '100%', backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>

                                    <React.Fragment key={item.id}>
                                    <div>{item.name}</div>
                                    <div className='poster'>
                                        <img src={item.poster} alt={item.name} />
                                    </div>
                                    </React.Fragment>
                                    </div>
                                );
                                } else {
                                return null; // or any other fallback if you don't want to render anything
                                }
                            })}
                        
                    </Col>
                </Row>
                <Row style={{
                    marginBottom:'40px'
                }}>
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}}>DC</h4>
                    <Col style={{
                        display:'flex'
                    }}>
                            {data.map(item => {
                                if (item.production === 'DC') {
                                return (
                                    <div className="poster-container" style={{ width: '100%', height: '100%', backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>

                                    <React.Fragment key={item.id}>
                                    <div>{item.name}</div>
                                    <div className='poster'>
                                        <img src={item.poster} alt={item.name} />
                                    </div>
                                    </React.Fragment>
                                    </div>
                                );
                                } else {
                                return null; // or any other fallback if you don't want to render anything
                                }
                            })}
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )

}export default Home;