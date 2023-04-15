import React from 'react';
import { Link } from 'react-router-dom';

const Prod = [
  {
    id: 'p1',
    title: 'Product 1'
  },
  {
    id: 'p2',
    title: 'Product 2'
  },
  {
    id: 'p3',
    title: 'Product 3'
  },
];


function Products() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {/* <li><Link to="/product-1">Product 1</Link></li>
        <li><Link to="/product-2">Product 2</Link></li>
        <li><Link to="/product-3">Product 3</Link></li> */}

        {
          Prod.map((product) => {
            return (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </li>
            )
          } )
        }
      </ul>
    </>
  )
}

export default Products;