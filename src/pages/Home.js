import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import Pagebutton from "../components/Pagebutton"
import { useSelector } from 'react-redux'

export default function Home() {
    const page = useSelector(state => state.page.value)
    let [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            let rowdata = await fetch("https://fakestoreapi.com/products")
            let parsedData = await rowdata.json();
            // console.log('data',data)
            let showdata = [];
            for(let i=8*(page-1);i<8*page;i++){
                if(parsedData[i]!==undefined){
                showdata.push(parsedData[i])
                }
            }
            setData(showdata)
        }
        getData();
      }, [page]);

    return (
    <div style={{ minHeight: "100vh"}}>  
        <img className='image' style={{width:'100%', }} src={"https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg"} alt=''/>
        <div style={{display:'flex',justifyContent:'center',}}>
            <div style={{marginTop:'20px',backgroundColor:'#FFBE4D',}}>
                <h3 style={{padding:'15px'}}>Our Product</h3>
            </div>     
        </div>
        
        <div className="products" >
            {data &&
            data.map((d) => {
                return <Product data={d} />;
            })}
        </div>
        <Pagebutton/>
    </div>
)}
