import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import {addtocart} from '../redux/itemslice';
import {  useDispatch} from 'react-redux'
import React,{useState} from 'react'


const Product = ({ data }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  function handleClose(){
    setShow(false)
  }
  function handleShow(){ 
    setShow(true);
  }


  return (
    <div>
    <Card  className="Product" >
      <Card className='imageContainer'><Card.Img variant="top" src={data.image} onClick={handleShow}/></Card>
      <Card.Body className='cardbody'>
        <Card.Title>
         {data.id}-{data.title} 
        </Card.Title>
        <Card.Text>
        Price: {data.price}$
        <br/>
        <a onClick={handleShow}>More details</a>
        </Card.Text>
        <Button className='cart' variant="primary" onClick={()=>{dispatch(addtocart({'id':data.id,'url':data.image,'title':data.title,'price':data.price,'category':data.category,'Qt':1}));alert('Product Has Been Successfully Added!')}} >
          🛒
        </Button>
       
      </Card.Body>
    </Card>

    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.id}.{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> <span style={{fontWeight:'bold'}}>Price:</span> {data.price}</p>
          <p><span style={{fontWeight:'bold'}}>Category:</span> {data.category}</p>
          <p><span style={{fontWeight:'bold'}}>In Stock:</span> {data.rating.count}</p>
          <p><span style={{fontWeight:'bold',fontSize:'1.3rem'}}>Description:</span> {data.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{dispatch(addtocart({'id':data.id,'url':data.image,'title':data.title,'price':data.price,'category':data.category,'Qt':1}));handleClose()}}>
            ADD🛒
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
};

export default Product;
