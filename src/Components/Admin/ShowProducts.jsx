import React from "react";
import styled from "styled-components";
import { useAdminContext } from "../../context/adminContext";
import Loader from "../Home/ShowProduct/CardLoader";

const ProductTable = () => {
  const { admin, loading, adminDeleteProduct } = useAdminContext();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const deleteProduct = async (productId) => {
    window.confirm("Are you sure want to delete this product?");
    if (confirm) {
      await adminDeleteProduct(productId);
    }
  };
  const { products } = admin;
  return (
    <>
      <p className="text-2xl m-2 text-center">All Products</p>
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th>Image</Th>
              <Th>Product name</Th>
              <Th>Category</Th>
              <Th>Discount</Th>
              <Th>Available</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </tr>
          </Thead>
          <Tbody>
            {products.map((product, index) => (
              <Tr key={index}>
                <Td>
                  <img
                    className="w-10 h-10 "
                    src={product.image}
                    alt={product.name}
                  />
                </Td>
                <Td>
                  <b>{product.name}</b>
                </Td>
                <Td>{product.category}</Td>
                <Td>{product.discount}%</Td>
                <Td>Yes</Td>
                <Td>₹{product.price}/-</Td>
                <Td>
                  <ActionLinks>
                    <a href="#" className="edit">
                      Edit
                    </a>
                    |
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="remove"
                    >
                      Remove
                    </button>
                  </ActionLinks>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  width: 100%;
`;

const Table = styled.table`
  width: 98%;
  font-size: 0.875rem;
  color: #6b7280;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #0c737e;
  color: #374151;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const Th = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-weight: 600;
`;

const Tbody = styled.tbody`
  background-color: #ffffff;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  &:hover {
    background-color: rgb(46, 126, 135);
  }
`;

const Td = styled.td`
  padding: 0.75rem 1.5rem;
  white-space: nowrap;
  color: #374151;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${({ bold }) => (bold ? "500" : "400")};
  max-width: 150px;
`;

const ActionLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  button {
    color: red;
    cursor: pointer;
  }
  a {
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    &.edit {
      color: #3b82f6;
    }
  }
`;

export default ProductTable;
