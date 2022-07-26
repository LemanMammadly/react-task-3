import './App.css';
import React, { useEffect, useState,CSSProperties } from 'react'
import ProductList from './components/ProductList';
import PropagateLoader from "react-spinners/PropagateLoader";

const override: CSSProperties = {
  display: "block",
  position:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)", 
  borderColor: "red",
};



function App() {
  const[products,setProducts]=useState([])
  const[search,setSearch]=useState('')
  const[minprice,setMin]=useState('0')
  const[maxprice,setMax]=useState('1000')
  let [loading,setLoading]=useState(true);


  useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(data=>{
              setProducts(data)
              setTimeout(() => {
                setLoading(false)
              }, 3000);
          })
          
  })
  const SearchHandler = (e) =>{
    setSearch(e.target.value)
  }
  const filteredProducts=products.filter(products=>products.title.toLowerCase().includes(search.toLowerCase()))

  const filteredPrice=products.filter(products=>products.price>minprice && products.price<maxprice)

  const MinPrice=(e)=>{
    setMin(e.target.value)
  }
  const MaxPrice=(e)=>{
    setMax(e.target.value)
  }
  return (
    <div className="App">
        <div className="form-group my-3 w-50 mx-auto row justify-content-between">
            <input onChange={SearchHandler} className='form-control' type="text" placeholder='Search products...'/>
            <input onChange={MinPrice} className='form-control w-25' type="number" required placeholder='Min price...' />
            <input onChange={MaxPrice} className='form-control w-25' type="number" required placeholder='Max price...' />
        </div>

        {
          loading ? <PropagateLoader loading={loading} cssOverride={override} size={20} /> :
          filteredPrice.map(product=>{
            return(
              <ProductList
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            )}) 
            
        }
   </div>
  );
}

export default App;
