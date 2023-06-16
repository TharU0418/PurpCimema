import React, {useState} from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function AddMovie() {

  const history = useNavigate();

  const[letter, setLetter] = useState('')
  const[name, setName] = useState('')
  const[year, setYear] = useState('')
  const[production, setProduction] = useState('')
  const[category, setCategory] = useState('')
  const[poster, setPoster] = useState('')
  const[description, setDescrip] = useState('')
  const[wstatus, setWStatus] = useState('')
  const[myrank, setMyrank] = useState('')

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/AddMovie`, {
        letter,name,year,production,category,poster,description,wstatus,myrank
      })
      .then(res=>{
        if(res.data == "exit"){
          alert("This Movie already Exit.")
        }else if(res.data == "notexist"){
          history("/home", {state:{id:name}})
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className='addmovie-container'>
      
      {/* <Form
        style={{
          backgroundColor:'#CC99FF',
          padding:'10px',
          width:'60%',
        }}
      >

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Letter'
            style={{
              textAlign:'center',
              fontSize:'16px',
              width:'20%',
              margin:'0',
              justifyContent:'center',
            }}  onchange = {(e) => setLetter(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px',
          }}
        >
          <Form.Control type='text' placeholder='Movie Name' 
          style={{
            textAlign:'center',
            fontSize:'16px'
          }} onchange = {(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Year'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}onchange = {(e) => setYear(e.target.value)}
          />  
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Production'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setProduction(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Category'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Poster'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setPoster(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie Description'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setDescrip(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie WatchS'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setWStatus(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          style={{
            border:'none',
            marginBottom:'16px'
          }}
        >
          <Form.Control type='text' placeholder='Movie My Rank'
            style={{
              textAlign:'center',
              fontSize:'16px'
            }}  onchange = {(e) => setMyrank(e.target.value)}
          />
        </Form.Group>

        <Button
          style={{
            backgroundColor:'red',
            color:'white',
            border:'none',
            borderRadius:'20px',
            padding:'10px',
            marginRight:'20px'
          }}
        >Clear</Button>

        <Button
          style={{
            backgroundColor:'green',
            color:'white',
            border:'none',
            borderRadius:'14px',
            padding:'10px',
            width:'10%'
          }} onClick={submit}
        >Add</Button>

      </Form> */}


    <form>
      <input
        type="text"
        onChange={(e) => setLetter(e.target.value)}
        placeholder="letter"
      />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        onChange={(e) => setYear(e.target.value)}
        placeholder="year"
      />
      <input
        type="text"
        onChange={(e) => setProduction(e.target.value)}
        placeholder="Production"
      />
      <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="text"
        onChange={(e) => setPoster(e.target.value)}
        placeholder="Poster"
      />
      <input
        type="text"
        onChange={(e) => setDescrip(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        onChange={(e) => setWStatus(e.target.value)}
        placeholder="Watch Status"
      />
      <input
        type="text"
        onChange={(e) => setMyrank(e.target.value)}
        placeholder="My Rank"
      />

      <input type="submit" onClick={submit} />
      <input type="submit"value='update' onClick={submit} />
    </form>

    </div>
  )
}

export default AddMovie