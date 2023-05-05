import React from 'react'
import Button from 'react-bootstrap/Button';

export const Index = () => {

  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
  ]


  return (
    <>
      <div style={{minHeight:'100%'}}>
        <div className='imagecontainer' style={{pistion:'relative'}}>
          <img className='image1 img' src={data[0]} alt=''/>
          <img className='image4 img' src={data[3]} alt=''/>
          
          <div className='phone'> 
            <img className='image2 img' src={data[1]} alt=''/>
            <img className='image3 img' src={data[2]} alt=''/>
          </div>
          <div  id='button' classname='btcontainer'  >
            <Button  className='shopping' variant="warning">
                <a href="/shopping"  className='aaa'> Go Shopping</a>
            </Button>
          </div>

        </div>

      </div>      
    </>
    
  )
}
