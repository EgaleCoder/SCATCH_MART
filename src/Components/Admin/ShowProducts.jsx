import React, { useState } from "react";
import styled from "styled-components";
import { useAdminContext } from "../../context/adminContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Home/ShowProduct/CardLoader";
import { formatPrice } from "../../utils/priceFormat";

const ProductTable = () => {
  const navigate = useNavigate();
  const { admin, loading, adminDeleteProduct } = useAdminContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  const deleteProduct = async (productId, productName) => {
    if (window.confirm(`Are you sure you want to delete "${productName}"?`)) {
      await adminDeleteProduct(productId);
    }
  };

  const { products } = admin;

  // Filter products
  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  // Get unique categories
  const categories = [...new Set(products?.map(p => p.category) || [])];

  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>All Products</Title>
          <HeaderActions>
            <SearchBox>
              <SearchIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBox>
            <FilterSelect value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
              <option value="all">All Categories</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </FilterSelect>
          </HeaderActions>
        </Header>

        <StatsBar>
          <StatCard>
            <StatNumber>{products?.length || 0}</StatNumber>
            <StatLabel>Total Products</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{categories.length}</StatNumber>
            <StatLabel>Categories</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{filteredProducts.length}</StatNumber>
            <StatLabel>Filtered Results</StatLabel>
          </StatCard>
        </StatsBar>

        {filteredProducts.length === 0 ? (
          <EmptyState>
            <EmptyIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16V8a2 2 0 0 0-1.106-1.789l-7-4a2 2 0 0 0-1.788 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1.106 1.789l7 4a2 2 0 0 0 1.788 0l7-4A2 2 0 0 0 21 16Z" />
              </svg>
            </EmptyIcon>
            <EmptyTitle>No Products Found</EmptyTitle>
            <EmptyText>Try adjusting your search or filter to find what you're looking for.</EmptyText>
          </EmptyState>
        ) : (
          <TableContainer>
            <Table>
              <Thead>
                <tr>
                  <Th>Product</Th>
                  <Th>Category</Th>
                  <Th>Price</Th>
                  <Th>Discount</Th>
                  <Th>Final Price</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </tr>
              </Thead>
              <Tbody>
                {filteredProducts.map((product, index) => {
                  const finalPrice = product.price - (product.price * product.discount / 100);
                  return (
                    <Tr key={index}>
                      <Td>
                        <ProductInfo>
                          <ProductImage src={product.image[0]} alt={product.name} />
                          <ProductDetails>
                            <ProductName>{product.name}</ProductName>
                            <ProductMaterial>{product.material}</ProductMaterial>
                          </ProductDetails>
                        </ProductInfo>
                      </Td>
                      <Td>
                        <CategoryBadge>{product.category}</CategoryBadge>
                      </Td>
                      <Td>
                        <PriceText>{formatPrice(product.price)}</PriceText>
                      </Td>
                      <Td>
                        <DiscountBadge>{product.discount}%</DiscountBadge>
                      </Td>
                      <Td>
                        <FinalPrice>{formatPrice(finalPrice)}</FinalPrice>
                      </Td>
                      <Td>
                        <StatusBadge $status="available">Available</StatusBadge>
                      </Td>
                      <Td>
                        <ActionButtons>
                          <ActionButton 
                            $primary
                            onClick={() => navigate(`/admin/edit-product/${product._id}`)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                            </svg>
                            Edit
                          </ActionButton>
                          <ActionButton
                            $danger
                            onClick={() => deleteProduct(product._id, product.name)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                            </svg>
                            Delete
                          </ActionButton>
                        </ActionButtons>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100%;
  background-color: #f8f9fa;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 300px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  color: #718096;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.625rem 1rem 0.625rem 2.75rem;
  background-color: white;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #093e44;
    box-shadow: 0 0 0 3px rgba(9, 62, 68, 0.1);
  }
`;

const FilterSelect = styled.select`
  padding: 0.625rem 1rem;
  background-color: white;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #093e44;
    box-shadow: 0 0 0 3px rgba(9, 62, 68, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StatsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #093e44;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TableContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background: linear-gradient(135deg, #093e44 0%, #0c737e 100%);
  color: white;
`;

const Th = styled.th`
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
`;

const Tbody = styled.tbody`
  background-color: #ffffff;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f7fafc;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Td = styled.td`
  padding: 1rem 1.5rem;
  color: #2d3748;
  font-size: 0.875rem;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 0.5rem;
  flex-shrink: 0;
  border: 1px solid #e2e8f0;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ProductName = styled.div`
  font-weight: 600;
  color: #2d3748;
`;

const ProductMaterial = styled.div`
  font-size: 0.75rem;
  color: #718096;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background-color: #e0f2f1;
  color: #00695c;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
`;

const PriceText = styled.div`
  font-weight: 600;
  color: #2d3748;
`;

const DiscountBadge = styled.span`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background-color: #fef3c7;
  color: #92400e;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
`;

const FinalPrice = styled.div`
  font-weight: 700;
  color: #059669;
  font-size: 1rem;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
  background-color: ${props => props.$status === 'available' ? '#4ade80' : '#f87171'};
  color: white;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.875rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  white-space: nowrap;

  ${props => props.$primary ? `
    background-color: #093e44;
    color: white;
    
    &:hover {
      background-color: #0c737e;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  ` : props.$danger ? `
    background-color: #ef4444;
    color: white;
    
    &:hover {
      background-color: #dc2626;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(239, 68, 68, 0.3);
    }
  ` : ''}

  &:active {
    transform: translateY(0);
  }
`;

const EmptyState = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EmptyIcon = styled.div`
  color: #cbd5e0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const EmptyText = styled.p`
  color: #718096;
  font-size: 1rem;
`;

export default ProductTable;