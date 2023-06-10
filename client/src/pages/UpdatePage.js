import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import parse from "query-string"
import axios from 'axios';

function UpdatePage() {

    const locations = useLocation();
    const {id} = parse.parse(locations.search);

    function submit(e){
        e.preventDefault();

        const updatedData = {
            poster: poster,
            description:  description,
            wstatus: wstatus,
            myrank: myrank 
        };
            
        axios.put(`/AddMovie/${id}`, updatedData)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))


    }

    const[poster, setPoster] = useState('')
    const[description, setDescrip] = useState('')
    const[wstatus, setWStatus] = useState('')
    const[myrank, setMyrank] = useState('')

  return (
    <div>
        UpdatePage
        <p>{id}</p>

        <form>
            <input type="text" placeholder={id}/>

            <input type="text" 
                onChange={(e) => setPoster(e.target.value)} 
                placeholder="Poster"
            />

            <input type="text" 
                onChange={(e) => setDescrip(e.target.value)} 
                placeholder="Description"
            />

            <input type="text" 
               onChange={(e) => setWStatus(e.target.value)} 
                placeholder="Watch Status"
            />

            <input type="text" 
               onChange={(e) => setMyrank(e.target.value)} 
                placeholder="My Rank"
            />

            <input type="submit" onClick={submit} />

             </form>

    </div>
  )
}

export default UpdatePage