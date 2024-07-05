import { Card, CardActionArea, CardContent } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Count() {
    const [movie, setMovie] = useState([]);
    const [tv, setTv] = useState([]);
    const [wtMovieCount, setWtMovieCount] = useState(0);
    const [wlMovieCount, setWlMovieCount] = useState(0);
    const [wtTvCount, setWtTvCount] = useState(0);
    const [wlTvCount, setWlTvCount] = useState(0);

    useEffect(() => {
        fetchData('https://purpnight-server.onrender.com/AddMovie', setMovie, setWtMovieCount, setWlMovieCount);
        fetchData('https://purpnight-server.onrender.com/AddTvSeries', setTv, setWtTvCount, setWlTvCount);
    }, []);


    const fetchData = async (url, setData, setWtCount, setWlCount) => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            setData(data);
            setWtCount(data.filter(item => item.wstatus === "watched").length);
            setWlCount(data.filter(item => item.wstatus === "watchlist").length);
        } catch (error) {
            console.error(error);
        }
    };

    const renderCard = (title, count) => (
        <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: 'black', padding: '10px', marginLeft: '40px' }}>
            <CardActionArea>
                <CardContent style={{ color: 'white', textAlign: 'center' }}>
                    <h4>{title}</h4>
                    <h2 style={{ fontSize: '40px' }}>{count}</h2>
                </CardContent>
            </CardActionArea>
        </Card>
    );

    return (
        <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                {renderCard("WATCHED MOVIES", wtMovieCount)}
                {renderCard("WATCHLIST MOVIES", wlMovieCount)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '40px' }}>
                {renderCard("WATCHED TV-SERIES", wtTvCount)}
                {renderCard("WATCHLIST TV-SERIES", wlTvCount)}
            </div>
        </div>
    );
}
