import React, { useState } from "react";
import styled from "styled-components";
import { useAdminContext } from "../../context/adminContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { adminAddProduct } = useAdminContext();
  const [error, setError] = useState("");
  const [product, setProduct] = useState({
    image: ["", "", "", ""],
    name: "",
    price: "",
    discount: "",
    description: "",
    material: "",
    category: "",
    size: {
      type: "",
      height: "",
      width: "",
      length: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["type", "height", "width", "length"].includes(name)) {
      setProduct((prev) => ({
        ...prev,
        size: {
          ...prev.size,
          [name]: value,
        },
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...product,
        price: Number(product.price),
        discount: Number(product.discount),
        size: {
          ...product.size,
          type: String(product.size.type),
          height: Number(product.size.height),
          width: Number(product.size.width),
          length: Number(product.size.length),
        },
      };
      await adminAddProduct(payload);
      alert("Product Added");
      setProduct({
        image: ["", "", "", ""],
        name: "",
        price: "",
        discount: "",
        description: "",
        material: "",
        category: "",
        size: {
          type: "",
          height: "",
          width: "",
          length: "",
        },
      });
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Add New Product</p>

        {error ? (
          <p>{error}</p>
        ) : (
          <p className="message">Fill Detail of Your New Product</p>
        )}
        <div className="flex">
          {product.image.map((img, index) => (
            <label key={index}>
              <input
                type="url"
                required
                className="input"
                value={img}
                onChange={(e) => {
                  const newImages = [...product.image];
                  newImages[index] = e.target.value;
                  setProduct((prev) => ({ ...prev, image: newImages }));
                }}
              />
              <span>Image URL {index + 1}</span>
            </label>
          ))}
        </div>
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
              name="size"
              value={product.size.type}
              onChange={(e) =>
                setProduct((prev) => ({
                  ...prev,
                  size: {
                    ...prev.size,
                    type: e.target.value,
                  },
                }))
              }
            >
              <option value="" disabled>
                Select Size
              </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Free Size">Free Size</option>
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
              <option value="Suitcases & Trolley Bags">Suitcases & Trolley Bags</option>
              <option value="Backpacks">Backpacks</option>
              <option value="Duffle Bags">Duffle Bags</option>
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
            max="100"
            placeholder="Height(cm)"
            className="input"
            required
            value={product.size.height}
            onChange={handleChange}
          />
          <input
            name="width"
            type="number"
            max="100"
            placeholder="Width(cm)"
            className="input"
            required
            value={product.size.width}
            onChange={handleChange}
          />
          <input
            name="length"
            type="number"
            max="100"
            placeholder="Length(cm)"
            className="input"
            required
            value={product.size.length}
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
    background-color: #093e44;
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
    background-color: #093e44;
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
    background-color: rgb(46, 102, 108);
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
