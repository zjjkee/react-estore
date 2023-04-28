import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import Pagebutton from "../components/Pagebutton"
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
    const page = useSelector(state => state.page.value)
    let [data, setData] = useState(null);
    async function getData() {
        let rowdata = await fetch("https://fakestoreapi.com/products")
        let parsedData = await rowdata.json();
        // console.log('data',data)
        let showdata = [];
        for(let i=6*(page-1);i<6*page;i++){
            if(parsedData[i]!=undefined){
            showdata.push(parsedData[i])
            }
        }
        setData(showdata)
    }
    useEffect(() => {
        getData();
      }, [page]);

    return (
    <div style={{ minHeight: "100vh"}}>  
        <div className="products" >
            {data &&
            data.map((d) => {
                return <Product data={d} />;
            })}
        </div>
        <Pagebutton/>
    </div>
)}

// const Homepage = () => {
//   const [input, setInput] = useState("");
//   let [data, setData] = useState(null);
//   let [page, setPage] = useState(1);
//   const [currentSearch, setCurrentSearch] = useState("");
//   const auth = "563492ad6f91700001000001ac22187f3df749b5ac359637c75cb9b5";
//   const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
//   const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

//   // fetch data from pexels api
//   const search = async (url) => {
//     setPage(2);
//     const dataFetch = await fetch(url, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     });
//     let parsedData = await dataFetch.json();
//     setData(parsedData.photos);
//   };

//   // load more picture
//   const morepicture = async () => {
//     let newURL;
//     if (currentSearch === "") {
//       newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
//     } else {
//       newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
//     }
//     setPage(page + 1);
//     const dataFetch = await fetch(newURL, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: auth,
//       },
//     });
//     let parsedData = await dataFetch.json();
//     setData(data.concat(parsedData.photos));
//   };

//   // fetch data when the page loads up
//   useEffect(() => {
//     search(intialURL);
//   }, []);

//   useEffect(() => {
//     if (currentSearch === "") {
//       search(intialURL);
//     } else {
//       search(searchURL);
//     }
//   }, [currentSearch]);

//   return (
//     <div style={{ minHeight: "100vh" }}>
//       <Search
//         search={() => {
//           // JS Closure
//           setCurrentSearch(input);
//         }}
//         setInput={setInput}
//       />
//       <div className="pictures">
//         {data &&
//           data.map((d) => {
//             return <Picture data={d} />;
//           })}
//       </div>

//       <div className="morePicture">
//         <button onClick={morepicture}>Load More</button>
//       </div>
//     </div>
//   );
// };

