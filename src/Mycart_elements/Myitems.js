import React,{useEffect, useState}  from "react";
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from "react-redux";
import { addone,minusone,removeitem,checkout_show} from "../redux/itemslice";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRadio,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
  } from "mdb-react-ui-kit";


export default function(props) {

    const dispatch = useDispatch();
    const items = useSelector(state => state.item.value);

    return (
        <section className="h-100 h-custom" style={{ minHeight: "100vh"}} >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">

            <MDBCol>
              <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th scope="col" className="h2">
                      Shopping Cart
                    </th>
                    <th scope="col" className="h4">Category</th>
                    <th scope="col" className="h4">Quantity</th>
                    <th scope="col" className="h4">Price</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {items.map(d => {
                      return    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={d.url}
                            fluid
                            className="rounded-4"
                            style={{ width: "100px", height:"120px" }}
                            alt="Product"
                          />
                          <div className="flex-column ms-4">
                            <p className="mb-2" >{d.title}</p>
                          </div>
                        </div>
                      </th>
                      <td className="align-middle">
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                          {d.category}
                        </p>
                      </td>
                      <td className="align-middle">
                        <div class="d-flex flex-row align-items-center QT">
                          <button className="qt minus" style={{color:'red'}}  onClick={()=>{dispatch(minusone(d.id))}}>-</button>
                          <span style={{fontSize:"1.2rem"}}>{d.Qt}</span>
                          <button className="qt plus" style={{color:'lightblue'}} onClick={()=>{dispatch(addone(d.id))}}>+</button>
                          <button className="trash" onClick={()=>{dispatch(removeitem(d.id))}}><MDBIcon fas icon="trash-alt" /></button> 
                        </div>
                      </td>
                      <td className="align-middle">
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                          ${d.price}
                        </p>
                      </td>
                    </tr>
                  })}
  
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
  
  
            <MDBCard
              className="shadow-2-strong mb-5 mb-lg-0"
              style={{ borderRadius: "16px" }}
            >
              <MDBCardBody className="p-4">
                <MDBRow>


                  <MDBCol md="6" lg="4" xl="5" className="mb-4 mb-md-0">
                    <form>
                      <br />
                      <div className="d-flex flex-row pb-3">
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <MDBIcon
                              fab
                              icon="cc-mastercard fa-2x text-dark pe-2"
                            />
                            <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                            <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                          </p>
                        </div>
                      </div>
  
                    </form>
                  </MDBCol>





                  <MDBCol lg="12" xl="5">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">${checkout_show(items).subtotal}</p>
                    </div>
  
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-0">Tax({checkout_show(items).taxrate})</p>
                      <p className="mb-0">${checkout_show(items).tax}</p>
                    </div>
  
                    <hr className="my-4" />
  
                    <div
                      className="d-flex justify-content-between mb-4"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Total (tax included)</p>
                      <p className="mb-2">${checkout_show(items).total}</p>
                    </div>
  
                    <Button variant="primary" onClick={()=>{props.setShowaddress(true)}}> 
                       <div className="d-flex justify-content-between">
                        <span>Checkout</span>
                        <span>${checkout_show(items).total}</span>
                       </div>
                    </Button>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </section>
  )
}
