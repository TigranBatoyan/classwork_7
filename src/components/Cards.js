import React from 'react';

function Cards({data,removeData}) {
  return (
    <div>
   {
       data.map((item)=>{
           return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <a href="#" class="btn btn-danger" onClick={()=>removeData(item)}>Remove item</a>
                </div>
            </div>
           )
       })
   }
    </div>
  );
}

export default Cards;
