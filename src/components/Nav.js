import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Nav = () => {
  const items = useSelector(state => state.item.value);

  const Dot = () =>{
    return items[0]&&<div className="dot">{sum}</div>
  }

  let sum = 0;
  for(let i of items){
    sum+=i.Qt;
  }

  return (
    <nav>
      <h3>JINGKE's STORE</h3>
      <ul>
        <li>
          <Link to="/shopping"><span className="text">Shopping</span><span className="logo">🏠</span> </Link>
        </li>
        <li>
          <Link to="/mycart"> 
            <span className="text">Mycart</span>
            <span className="logo">🛒 
           <Dot />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
