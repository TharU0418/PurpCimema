import React, { useEffect, useRef, useState } from 'react'
import CarouselContainer from "../components/CarouselContainer";
import {Container, Row, Col, Button} from 'react-bootstrap';  
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Blob from '../components/Blob'
import ImageButtonCon from '../components/ImageButtonCon';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';


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

    
    // * Image Button //

    const sectionRef = useRef(null);
    const sectionAmo = useRef(null);
    const sectionNet = useRef(null);
    const sectionMar = useRef(null);
    const sectionDC = useRef(null);

const images = [
    {
      url: 'https://i.scdn.co/image/ab6761610000e5ebc698d53b77db34027b00f853',
      title: 'Disney',
      width: '20%',
      click:sectionRef ,
    },
    {
      url: 'https://deadline.com/wp-content/uploads/2022/08/Netflix_Symbol_logo.jpg?w=1024',
      title: 'Neftflix',
      width: '20%',
      click:sectionNet
    },
    {
      url: 'https://images.news18.com/ibnlive/uploads/2021/10/amazon-prime.jpg',
      title: 'Amzon Prime',
      width: '20%',
      click:sectionAmo
    },
    {
        url: 'https://static.vecteezy.com/system/resources/previews/019/550/621/original/marvel-logo-free-download-free-vector.jpg',
        title: 'Marvel',
        width: '20%',
        click:sectionMar
    },
    {
        url: 'https://static.dc.com/2022-06/dc_logo16x9.png',
        title: 'DC',
        width: '20%',
        click:sectionDC
    }
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));




  const handleButton = (ref) => {
    ref.current.scrollIntoView({behavior:'smooth'})
  };


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  
  const goToPreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };
  

  
    return(
        <div>
            <CarouselContainer/> 

            {/* Image-Button */}

            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '92%', justifyContent:'center',marginLeft:'60px'}}>
            {images.map((image) => (
                <ImageButton
                focusRipple
                key={image.title}
                style={{
                    width: image.width,
                }}
                onClick={() => handleButton(image.click)}
                >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                </Image>
                </ImageButton>
            ))}
        </Box>
            
        <Container style={{
            marginTop:"40px"
        }}>
                

            <Row style={{ marginBottom: '40px' }}>
                <h4 style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '10%', padding: '10px', textAlign: 'center' }} ref={sectionRef}>Disney</h4>
                <Col style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {data
                    .filter(item => item.production === 'Disney')
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map(item => (
                        <div className="poster-home" style={{ backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }} key={item.id}>
                        <React.Fragment>
                            <div>{item.name}</div>
                            <div className='poster'>
                            <img src={item.poster} alt={item.name} />
                            </div>
                        </React.Fragment>
                        </div>
                    ))}
                </Col>
                <div>
                    <button disabled={currentPage === 1} onClick={goToPreviousPage}>Previous</button>
                    <span>{currentPage}</span>
                    <button disabled={currentPage === totalPages} onClick={goToNextPage}>Next</button>
                </div>
            </Row>
            
                <Row style={{
                    marginBottom:'40px'
                }}>
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}} ref={sectionNet}>Nteflix</h4>
                    <Col style={{
                        display:'flex'
                    }}>
                            {data.map(item => {
                                if (item.production === 'Netflix') {
                                return (
                                    <div className="poster-home" style={{ backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>
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
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}}  ref={sectionAmo}>Amozen Prime</h4>
                    <Col style={{
                        display:'flex'
                    }}>
                            {data.map(item => {
                                if (item.production === 'Amozen Prime') {
                                return (
                                    <div className="poster-home" style={{ backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>

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
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}}  ref={sectionMar}>Marvel</h4>
                    <Col style={{
                        display:'flex'
                    }}>
                            {data.map(item => {
                                if (item.production === 'Marvel') {
                                return (
                                    <div className="poster-home" style={{ backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>

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
                    <h4 style={{backgroundColor:'black', color:"white", width:'100%', height:'10%', padding:"10px", textAlign:'center'}}  ref={sectionDC}>DC</h4>
                    <Col style={{
                        display:'flex'
                    }}>
                            {data.map(item => {
                                if (item.production === 'DC') {
                                return (
                                    <div className="poster-home" style={{ backgroundColor: '#BE7DFF', textAlign: 'center', justifyContent: 'center' }}>

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