import React from 'react';

function Cart({item,handleAddData}) {
  return (
<div className="card" style={{textAlign:'left'}}>
<div className="card-body">
  <h5 className="card-header">{item.name}</h5>
  <p className="card-text">{item.price}</p>
  <a href="#" class="btn btn-primary" onClick={()=>handleAddData(item)}>Add to card</a>
</div>
</div>
  );
}

export default Cart;
