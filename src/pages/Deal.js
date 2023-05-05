import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import { clearitems } from "../redux/itemslice";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { checkout_show } from "../redux/itemslice";



export default function Deal() {
  const location = useLocation();
  const { state } = location;
  console.log('location:',location, 'state:',state);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const items = useSelector(state => state.item.value)

  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee",minHeight:"100vh"}}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="8" xl="6">
              <MDBCard className="border-top border-bottom border-3 border-color-custom">
                <MDBCardBody className="p-5">
                  <p className="lead fw-bold mb-5" style={{ color: "#CAE5BC" }}>
                    My Order
                  </p>

                  <MDBRow>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Date</p>
                      <p>{state.update_time}</p>
                    </MDBCol>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>{state.id}</p>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol className="mb-3">
                      <p className="small text-muted mb-1">Details</p>
                      <p>{state.addressinfo.firstname} {state.addressinfo.lastname}</p>
                      <p>{state.addressinfo.phone}</p>
                      <p>{state.addressinfo.address1+', '}{state.addressinfo.city+', '}{state.addressinfo.state+', '}
                      {state.addressinfo.zip+', '}{state.addressinfo.country}
                        </p>
                      <p></p>
                    </MDBCol>
                  </MDBRow>


                  <div
                    className="mx-n5 px-5 py-4"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    {items.map(item=>{
                      return <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p>{item.title} </p>
                        <p>x {item.Qt}</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p>${item.price}</p>
                      </MDBCol>
                    </MDBRow>
                    })}


                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p className="mb-0">Tax</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p className="mb-0"> ${checkout_show(items).tax}</p>
                      </MDBCol>
                    </MDBRow>
                  </div>

                  <MDBRow className="my-4">
                    <MDBCol md="4"  className="offset-md-8 col-lg-3 offset-lg-9">
                      <p className="lead fw-bold mb-0">
                       Total
                      </p>
                    </MDBCol>
                    <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                      <p className="lead fw-bold mb-0">
                       ${checkout_show(items).total}
                      </p>
                    </MDBCol>
                  </MDBRow>

                  <p
                    className="lead fw-bold mb-4 pb-2"
                    style={{ color: "#CAE5BC" }}
                  >
                    Tracking Order
                  </p>

                  <MDBRow>
                    <MDBCol lg="12">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list" >
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: " orange" }}
                            >
                              Ordered
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#CAE5BC" }}
                            >
                              Shipped
                            </p>
                          </li>

                          <li
                            className="list-inline-item items-list text-end"
                          >
                            <p
                              className="py-1 px-2 rounded text-white"
                              style={{ backgroundColor: "#CAE5BC" }}
                            >    Delivered</p>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <p className="mt-4 pt-2 mb-0">
                    Want any help?{" "}
                    <a href="" style={{ color: "#CAE5BC" }}>
                      Please contact us
                    </a>
                  </p>
                  <button
                    className="py-1 px-2 rounded text-white"
                    style={{ backgroundColor: "#1097ea",border:"None",marginTop:'15px' }}
                    onClick={()=>{dispatch(clearitems());navigate('/home')}}
                  >
                    One More Order
                  </button>

                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}