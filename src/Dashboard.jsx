import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://44.202.89.100:5001/products').then(async (response) => {
        let data = await response.json();
        setProducts(data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="product-grid">
        {products?.map(product => (
          <div key={product.productId} className="product-row">
            <div className="product-image">
              <img src={product.image} alt={product.name} width="100" height="100" />
            </div>
            <div className="product-details">
              <h4>{product.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
