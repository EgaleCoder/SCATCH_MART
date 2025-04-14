import React from "react";
import styled from "styled-components";

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
  font-weight: ${({ bold }) => (bold ? "500" : "400")};
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ActionLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  a {
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }

    &.edit {
      color: #3b82f6;
    }

    &.remove {
      color: #ef4444;
    }
  }
`;

const ProductTable = () => {
  const products = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      accessories: "Yes",
      available: "Yes",
      price: "$2999",
      weight: "3.0 lb.",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.0 lb.",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      accessories: "Yes",
      available: "No",
      price: "$99",
      weight: "0.2 lb.",
    },
    {
      name: "Apple Watch",
      color: "Black",
      category: "Watches",
      accessories: "Yes",
      available: "No",
      price: "$199",
      weight: "0.12 lb.",
    },
    {
      name: "Apple iMac",
      color: "Silver",
      category: "PC",
      accessories: "Yes",
      available: "Yes",
      price: "$2999",
      weight: "7.0 lb.",
    },
    {
      name: "Apple AirPods",
      color: "White",
      category: "Accessories",
      accessories: "No",
      available: "Yes",
      price: "$399",
      weight: "38 g",
    },
    {
      name: "iPad Pro",
      color: "Gold",
      category: "Tablet",
      accessories: "No",
      available: "Yes",
      price: "$699",
      weight: "1.3 lb.",
    },
  ];

  return (
    <>
      <p className="text-2xl m-2 text-center">All Products</p>
      <TableContainer>
        <Table>
          <Thead>
            <tr>
              <Th>
              </Th>
              <Th>Product name</Th>
              <Th>Category</Th>
              <Th>Accessories</Th>
              <Th>Available</Th>
              <Th>Price</Th>
              <Th>Action</Th>
            </tr>
          </Thead>
          <Tbody>
            {products.map((product, index) => (
              <Tr key={index}>
                <Td>
                  <CheckboxContainer>
                    <input type="checkbox" />
                  </CheckboxContainer>
                </Td>
                <Td bold>{product.name}</Td>
                <Td>{product.category}</Td>
                <Td>{product.accessories}</Td>
                <Td>{product.available}</Td>
                <Td>{product.price}</Td>
                <Td>
                  <ActionLinks>
                    <a href="#" className="edit">
                      Edit
                    </a>
                    <a href="#" className="remove">
                      Remove
                    </a>
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

export default ProductTable;
