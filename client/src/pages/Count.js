import { Card, CardActionArea, CardContent, CardHeader } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Count() {

    const[movie, setMovie] = useState([])
    const[tv, setTv] = useState([])
    const[wtmovie, setWtCount] = useState([])
    const[wlmovie, setWlCount] = useState([])
    const[wttv, setTvCount] = useState([])
    const[wltv, setWlTvCount] = useState([])

    useEffect(() => {
        fetchData();
    }, [movie])

    useEffect(() => {
        fetchTVData();
    }, [tv])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/AddMovie')
            setMovie(response.data)
            setWtCount(movie.filter(item => item.wstatus === "watched"))
            setWlCount(movie.filter(item => item.wstatus === "watchlist"))
            
        } catch (error) {
            console.log(error)
        }
    }

    const fetchTVData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/AddTvSeries')
            setTv(response.data)
            setTvCount(tv.filter(item => item.wstatus === "watched"))
            setWlTvCount(tv.filter(item => item.wstatus === "watchlist"))
        } catch (error) {
            console.log(error)
        }
    }

    console.log('movie', movie)
    console.log('movie', tv)
    console.log('movie', wtmovie)
    console.log('movie', wlmovie)
    console.log('movie', wttv)


    const wtmoviecount = wtmovie.length;
    const wlmoviecount = wlmovie.length;
    const wttvcount = wttv.length;
    const wltvcount = wltv.length;

  return (
    <div style={{marginTop:'40px'}}>
        
        <div style={{display:'flex', flexDirection:'row', position:'relative', left:'30%'}}>
            <Card sx={{maxWidth : 345}} style={{backgroundColor:' black', padding:'10px'}}>
                <CardActionArea>
                    <CardContent style={{color:'white', textAlign:'center'}}>
                        <h4>WATCHED MOVIES</h4>
                        <h2 style={{fontSize:'40px'}}>{wtmoviecount}</h2>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{maxWidth : 345}} style={{backgroundColor:' black', padding:'10px',marginLeft:'40px'}}>
                <CardActionArea>
                    <CardContent style={{color:'white', textAlign:'center'}}>
                        <h4>WATCHLIST MOVIES</h4>
                        <h2 style={{fontSize:'40px'}}>{wlmoviecount}</h2>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

        <div style={{display:'flex', flexDirection:'row',position:'relative', left:'30%', marginTop:'40px'}}>
        <Card sx={{maxWidth : 345}} style={{backgroundColor:' black', padding:'10px'}}>
            <CardActionArea>
                <CardContent style={{color:'white', textAlign:'center'}}>
                    <h4>WATCHED TV-SERIES</h4>
                    <h2 style={{fontSize:'40px'}}>{wttvcount}</h2>
                </CardContent>
            </CardActionArea>
        </Card>

        <Card sx={{maxWidth : 345}} style={{backgroundColor:' black', padding:'10px', marginLeft:'40px'}}>
            <CardActionArea>
                <CardContent style={{color:'white', textAlign:'center'}}>
                    <h4>WATCHLIST TV-SERIES</h4>
                    <h2 style={{fontSize:'40px'}}>{wltvcount}</h2>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>

        
    </div>
  )
}
