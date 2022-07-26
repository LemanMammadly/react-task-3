import React from 'react'

const ProductList = ({title,price,description,category,image}) => {
  return (
    <div className="container">
       <table class="table table-striped">
        <thead>
            <tr>
                <th className='col-lg-2'></th>
                <th className='col-lg-2'></th>
                <th className='col-lg-2'></th>
                <th className='col-lg-5'></th>
                <th className='col-lg-2'></th>
            </tr>
        </thead>
        <tbody id="tbody">
           <tr>
                <td><img src={image} alt="" /></td>
                <td>{title}</td>
                <td>{price}$</td>
                <td>{description}</td>
                <td>{category}</td>
            </tr>  
        </tbody>
    </table>
    </div>
  )
}

export default ProductList