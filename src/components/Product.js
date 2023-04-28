import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import {addtocart} from '../redux/itemslice';
import { useSelector, useDispatch } from 'react-redux'
import React,{useEffect,useState} from 'react'


const Product = ({ data }) => {
  const dispatch = useDispatch()
  const item = useSelector(state=>state.item.value)
  useEffect((item)=>{
    console.log('item:',item);
  },[dispatch])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
    <Card  className="Product" >
      <Card className='imageContainer'><Card.Img variant="top" src={data.image} onClick={handleShow}/></Card>
      <Card.Body className='cardbody'>
        <Card.Title>
        Price: {data.price}$
        </Card.Title>
        <Card.Text>
        {data.id}-{data.title} 
        <br/>
        <p onClick={handleShow}>More details</p>
        </Card.Text>
        <Button className='cart' variant="primary" onClick={()=>{dispatch(addtocart({'id':data.id,'url':data.image,'title':data.title,'price':data.price,'category':data.category,'Qt':1}));alert('Product Has Been Successfully Added!')}} >🛒</Button>
      </Card.Body>
    </Card>

    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            ADD🛒
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
};

export default Product;
