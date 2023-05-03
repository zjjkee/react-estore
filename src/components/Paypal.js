import React,{useState} from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector} from "react-redux";
import { checkout_show } from "../redux/itemslice";

import { useNavigate } from 'react-router-dom'

export default function Paypal(props) {

    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    
    const navigate = useNavigate();

    const items = useSelector(state=>state.item.value)

    // creates a paypal order
    const createOrder = (data, actions) => {
      return actions.order
        .create({
          purchase_units: [
            {
              description: "Sunflower",
              amount: {
                currency_code: "USD",
                value: checkout_show(items).total,
              },
            },
          ],
          // not needed if a shipping address is actually needed
          application_context: {
            shipping_preference: "NO_SHIPPING",
          },
        })
        .then((orderID) => {
          setOrderID(orderID);
          return orderID;
        });
    };
    
    // check Approval
    const onApprove = (data, actions) => {
      return actions.order.capture().then(function (details) {
        console.log(details)
        (function(){navigate('/deal',{ state: {
          addressinfo: props.addressinfo,
          id: details.id,
          update_time: details.update_time,
          status_: details.status
       } })}())
        // dispatch(clearitems())
        
      });
    };
    //capture likely error
    const onError = (data, actions) => {
      setErrorMessage("An Error occured with your payment ");
    };

    return (
        <PayPalScriptProvider
        options={{
          "client-id":"test",
        }}
      >
         
            <PayPalButtons
              className="paypalbutton"
              style={{ layout: "vertical" }}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError} />
            
   
      </PayPalScriptProvider>
    );
}