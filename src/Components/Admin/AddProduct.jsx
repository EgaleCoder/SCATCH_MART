import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const AddProduct = () => {
  const [size, setSize] = useState('');
  const [category, setCategory] = useState("");

  return (
    <StyledWrapper>
      <form className="form">
        <p className="title">Add New Product</p>
        <p className="message">Fill Detail of Your New Product  </p>
        <div className="flex">
          <label>
            <input required placeholder type="href" className="input" />
            <span>Image</span>
          </label>
          <label>
            <input required placeholder type="text" className="input" />
            <span>Product Name</span>
          </label>
        </div>  
        <label>
          <input required placeholder type="text" className="input" />
          <span>Prices</span>
        </label> 
        <label></label>
        <label>
          <input required placeholder type="number" className="input" />
          <span>Discount</span>
        </label> 
        <label>
          <input required placeholder type="text" className="input" />
          <span>Description</span>
        </label>
        <label>
          <input required placeholder type="text" className="input" />
          <span>Material</span>
        </label>
        <SelectWrapper>
      <Label htmlFor="size">Size:</Label>
      <Select
        id="size"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="" disabled>
          Select Size
        </option>
        <option value="S">Small (S)</option>
        <option value="M">Medium (M)</option>
        <option value="L">Large (L)</option>
        <option value="XL">Extra Large (XL)</option>
      </Select>
    </SelectWrapper>
    <SelectWrapper>
  <Label htmlFor="category">Category:</Label>
  <Select
    id="category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="" disabled>Select Category</option>
    <option value="Travel">Travel</option>
    <option value="Backpacks">Backpacks</option>
    <option value="School Bags">School Bags</option>
    <option value="Handbags">Handbags</option>
    <option value="Laptop Bags">Laptop Bags</option>
  </Select>
</SelectWrapper>
    <input
  required
  type="number"
  className="input"
  placeholder="Height(cm)"
  onInput={(e) => {
    e.target.value = e.target.value.slice(0, 70);
  }}
/>
<input
  required
  type="number"
  className="input"
  placeholder="Width(cm)"
  onInput={(e) => {
    e.target.value = e.target.value.slice(0, 50);
  }}
/>

        <button className="submit">Add Product</button>
       
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color:  #60a5fa;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color:  #60a5fa;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }

  .submit:hover {
    background-color:  #60a5fa;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;
  const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
  outline: none;
  background-color: white;
  color: #333;

  &:focus {
    border-color: royalblue;
  }
`;


export default AddProduct;
