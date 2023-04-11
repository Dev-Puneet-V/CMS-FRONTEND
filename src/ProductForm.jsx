import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ProductForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [productImages, setProductImages] = useState([]);
  const navigate = useNavigate();

  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setProductImages([...productImages, ...files]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a FormData object and add the form data to it
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('currency', currency);
    productImages.forEach((image) => {
      formData.append('productImages', image);
    });

    // Send the form data to the server using fetch
    fetch('http://44.202.89.100:5001/products', {
      method: 'POST',
      body: formData,
    }).then((response) => {
        navigate('/dashboard');
    }).catch((error) => {
    navigate('/');
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" value={price} onChange={handlePriceChange} />
      </div>
      <div>
        <label htmlFor="currency">Currency:</label>
        <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div>
        <label htmlFor="productImages">Product Images:</label>
        <input type="file" id="productImages" onChange={handleImageUpload} multiple />
      </div>
      <button type="submit">Submit</button>
    </form>
    <button><a href="http://localhost:3001/dashboard">Go to dashboard</a></button>
    </>
  );
}

export default ProductForm;
