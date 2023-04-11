import React from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'

function AddMovie() {
  return (
    <div className='addmovie-container'>
      
      <Form
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
              justifyContent:'center'
            }}
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
          }}
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
            }}
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
            }}
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
            }}
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
            }}
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
            }}
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
            }}
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
            }}
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
          }}
        >Add</Button>

      </Form>

    </div>
  )
}

export default AddMovie