import React,{useState,useEffect} from 'react';
import Cart from './Cart'

function Products({handleAddData}) {
    const[data,setData] = useState([])
    const[loading,setLoading] = useState(true)
        useEffect(()=>{   
          fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/item')
          .then(response => response.json().then(data=>{
               setData(data)
               setLoading(false)
          }))
          .catch()
        },[])



  return (
    <div style={{textAlign:'center'}}>
        
        {
        loading 
        && 
        <div class="spinner-border text-secondary"  role="status">
            <span class="sr-only">Loading...</span>
        </div>
        }
      {
          data.map((item)=>{
             return  <Cart item={item} handleAddData={handleAddData} key={item.id} />
          })
      }
    </div>
  );
}

export default Products;
