import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import parse from "query-string"
import axios from 'axios';

function UpdatePage() {

    const locations = useLocation();
    const {id} = parse.parse(locations.search);

    const[poster, setPoster] = useState('')
    const[description, setDescrip] = useState('')
    const[wstatus, setWStatus] = useState('')
    const[myrank, setMyrank] = useState('')

    async function submit(e){
        e.preventDefault();

        console.log(id)

        const updatedData = {
            poster: poster,
            description:  description,
            wstatus: wstatus,
            myrank: myrank 
        };
            
        try{
            await axios.put(`http://localhost:8000/AddPage/${id}`, updatedData)
            console.log("Updated Successfully.")
        }catch(error){
            console.log(error)
        }

    }

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