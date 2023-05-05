import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import zIndex from '@mui/material/styles/zIndex';

export const Index = () => {

  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
  ]


  return (
    <>
     <nav style={{height:'7vh'}}>
        <h3>JINGKE's STORE</h3>
     </nav>

      <div style={{minHeight:'100%'}}>
        <div className='imagecontainer' style={{pistion:'relative'}}>
          <img className='image' style={{width:'100%'}}  src={data[0]} alt=''/>
          <div style={{display:'flex',justifyContent:'center'}}>
            <Button style={{position:'absolute' ,zIndex:'1', width:'40vh',height:'60px',top:'70%'}} variant="warning">
                <a href="/home" style={{textDecoration:'none',color:'white',fontSize:'1.5rem'}}> Go Shopping</a></Button>
          </div>
          <img className='image' style={{width:'100%', }} src={data[3]} alt=''/>
          <img className='w-screen h-full object-cover' style={{width:'100%', }}  src={data[1]} alt=''/>
          <img className='w-screen h-full object-cover' style={{width:'100%', }} src={data[2]} alt=''/>
        </div>

      </div>      
    </>
    
  )
}
