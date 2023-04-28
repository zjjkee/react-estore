import React  from "react";
import Button from 'react-bootstrap/Button';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector,useDispatch } from "react-redux";
import { addone,minusone } from "../redux/itemslice";
import {
    MDBBtn,
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



export default function SummaryPage() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.item.value);
    let taxrate = 0.112;
    let subtotal = 0;
    for(let item of items){
        subtotal+= item.Qt*item.price
        Number(subtotal.toFixed(2))
    }
    let tax = Number((subtotal*taxrate).toFixed(2))
    if(items[0]){
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
                <MDBCol md="6" lg="4" xl="3" className="mb-4 mb-md-0">
                  <form>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon
                            fab
                            icon="cc-mastercard fa-2x text-dark pe-2"
                          />
                          Credit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-visa fa-2x text-dark pe-2" />
                          Debit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <MDBRadio
                          type="radio"
                          name="radio1"
                          checked
                          value=""
                          aria-label="..."
                        />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <MDBIcon fab icon="cc-paypal fa-2x text-dark pe-2" />
                          PayPal
                        </p>
                      </div>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol md="6" lg="4" xl="6">
                  <MDBRow>
                    <MDBCol size="12" xl="6">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Name on card"
                        placeholder="John Smiths"
                        size="lg"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Expiration"
                        placeholder="MM/YY"
                        size="lg"
                        maxLength={7}
                        minLength={7}
                      />
                    </MDBCol>

                    <MDBCol size="12" xl="6">
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Card Number"
                        placeholder="1111 2222 3333 4444"
                        size="lg"
                        minlength="19"
                        maxlength="19"
                      />
                      <MDBInput
                        className="mb-4 mb-xl-5"
                        label="Cvv"
                        placeholder="&#9679;&#9679;&#9679;"
                        size="lg"
                        minlength="3"
                        maxlength="3"
                        type="password"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol lg="4" xl="3">
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">${subtotal.toFixed(2)}</p>
                  </div>

                  <div
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-0">Tax({(Math.round(taxrate*10000))/100+'%'})</p>
                    <p className="mb-0">${tax}</p>
                  </div>

                  <hr className="my-4" />

                  <div
                    className="d-flex justify-content-between mb-4"
                    style={{ fontWeight: "500" }}
                  >
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2">${(subtotal+tax).toFixed(2)}</p>
                  </div>

                  <Button variant="primary"> 
                     <div className="d-flex justify-content-between">
                      <span>Checkout</span>
                      <span>${(subtotal+tax).toFixed(2)}</span>
                     </div>
                  </Button>{' '}
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}else{
    return <div style={{minHeight:'100vh'}}>
    <h2>Your Cart is Empty!</h2>
    <a href="/">Go Shopping!</a>

    </div>
}
}