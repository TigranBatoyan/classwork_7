import React,{useState} from 'react';
import Products from './components/Products';
import Cards from './components/Cards'


function App() {
  const[data,setData] = useState([])
  const[products,setProducts] = useState(true)

  const handleAddData = (item) =>{
    setData([...data,item])
  }

  const removeData = (item) =>{
    const newData = data.filter(selectedItem=>{
      return selectedItem.id !== item.id
    })
     setData(newData)
  }

  return (
    <div className="App">
      <div>
         <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => setProducts(true)}>Products</button>
         <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={() => setProducts(false)}>Cards</button>
      </div>
      <span class="badge badge-success">Selected Item: {data.length}</span>
     
      {
        products ? <Products handleAddData={handleAddData} /> : <Cards removeData={removeData} data={data} />
      }
    </div>
  );
}

export default App;
