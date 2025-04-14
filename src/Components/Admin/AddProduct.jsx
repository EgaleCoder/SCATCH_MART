import React, { useState } from "react";
import styled from "styled-components";

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: "",
    discount: "",
    description: "",
    material: "",
    size: "",
    category: "",
    height: "",
    width: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product:", product);
    // Aap yaha API call ya backend logic add kar sakte ho
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Add New Product</p>
        <p className="message">Fill Detail of Your New Product</p>

        <div className="flex">
          <label>
            <input
              name="image"
              type="url"
              required
              className="input"
              value={product.image}
              onChange={handleChange}
            />
            <span>Image</span>
          </label>
          <label>
            <input
              name="name"
              type="text"
              required
              className="input"
              value={product.name}
              onChange={handleChange}
            />
            <span>Product Name</span>
          </label>
        </div>

        <div className="flex">
          <label>
            <input
              name="price"
              type="number"
              required
              className="input"
              value={product.price}
              onChange={handleChange}
            />
            <span>Price</span>
          </label>
          <label>
            <input
              name="discount"
              type="number"
              required
              className="input"
              value={product.discount}
              onChange={handleChange}
            />
            <span>Discount</span>
          </label>
        </div>

        <label>
          <input
            name="description"
            type="text"
            required
            className="input"
            value={product.description}
            onChange={handleChange}
          />
          <span>Description</span>
        </label>

        <label>
          <input
            name="material"
            type="text"
            required
            className="input"
            value={product.material}
            onChange={handleChange}
          />
          <span>Material</span>
        </label>

        <div className="flex">
          <SelectWrapper>
            <Label htmlFor="size">Size:</Label>
            <Select
              id="size"
              name="size"
              value={product.size}
              onChange={handleChange}
              required
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
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Travel">Travel</option>
              <option value="Backpacks">Backpacks</option>
              <option value="School Bags">School Bags</option>
              <option value="Handbags">Handbags</option>
              <option value="Laptop Bags">Laptop Bags</option>
            </Select>
          </SelectWrapper>
        </div>

        <div className="flex">
          <input
            name="height"
            type="number"
            max="70"
            placeholder="Height(cm)"
            className="input"
            required
            value={product.height}
            onChange={handleChange}
          />
          <input
            name="width"
            type="number"
            max="50"
            placeholder="Width(cm)"
            className="input"
            required
            value={product.width}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit">
          Add Product
        </button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 750px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: #093e44;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #093e44;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color:  #093e44;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
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
    width: 100%;
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

  .form label .input:focus + span,
  .form label .input:valid + span {
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
    background-color:  #093e44;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    width: 30%;
    aligh-item: center;
    justify-content: center;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit:hover {
    background-color:rgb(46, 102, 108);
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
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
  width: 100%;
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
