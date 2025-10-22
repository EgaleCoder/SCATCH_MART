import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useOrderContext } from '../../context/orderContext';
import { formatPrice } from '../../utils/priceFormat';
import Loader from '../Home/ShowProduct/CardLoader';


const OrderList = () => {
  const { orders, loading, error, fetchUserOrders } = useOrderContext();
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchUserOrders();
  }, [fetchUserOrders]);

  const getStatusText = (status) => {
    const statusTexts = {
      delivered: 'Delivered',
      shipped: 'Shipped',
      processing: 'Processing',
      pending: 'Pending',
      cancelled: 'Cancelled'
    };
    return statusTexts[status?.toLowerCase()];
  };

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  if (loading) {
    return <LoadingText>Loading orders...</LoadingText>;
  }

  if (error) {
    return <ErrorText>Error: {error}</ErrorText>;
  }

  if (!orders || orders.length === 0) {
    return (
      <>
        <PageContainer>
          <Container>
            <Title>My Orders</Title>
            <NoOrdersText>No orders found.</NoOrdersText>
          </Container>
        </PageContainer>
      </>
    )
  }

  return (
    <PageContainer>
      <Container>
        <Title>My Orders</Title>
        <OrdersGrid>
          {orders.map((order) => {
            const status = order.items?.[0]?.status;
            return (
              <OrderCard key={order._id}>
                <ProductImageContainer>
                  <ProductImage
                    src={order.items?.[0]?.product?.image?.[0]}
                    alt={order.items?.[0]?.product?.name}
                  />
                </ProductImageContainer>

                <OrderDetails>
                  <TopSection>
                    <HeaderRow>
                      <ProductName>
                        {order.items?.length} {order.items?.length === 1 ? 'Product' : 'Products'} in Order
                      </ProductName>
                      <StatusBadge $status={status}>
                        {getStatusText(status)}
                      </StatusBadge>
                    </HeaderRow>

                    <InfoText>Order ID: {order.orderId || order._id}</InfoText>
                    <InfoText>Date: {new Date(order.createdAt).toLocaleDateString()}</InfoText>
                    <InfoText>Total Items: {order.totalQuantity} | Payment Method: {order.paymentMethod}</InfoText>
                  </TopSection>

                  <BottomSection>
                    <Price>{formatPrice(order.totalAmount)}</Price>
                    <ViewButton onClick={() => handleOpenModal(order)}>View Details</ViewButton>
                  </BottomSection>
                </OrderDetails>
              </OrderCard>
            );
          })}
        </OrdersGrid>
      </Container>
      {selectedOrder && (() => {

        const subtotal = selectedOrder?.items?.reduce(
          (acc, item) => acc + (item?.product?.price || 0) * (item?.quantity || 0),
          0
        ) || 0;

        const totalDiscount = selectedOrder?.items?.reduce(
          (acc, item) =>
            acc +
            (item?.product?.price || 0) *
            (item?.quantity || 0) *
            ((item?.product?.discount || 0) / 100),
          0
        ) || 0;
        return (
          <ModalOverlay onClick={handleCloseModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <ModalTitle>Order Details</ModalTitle>
                <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
              </ModalHeader>

              <ModalBody>

                {/* -------- Order Items Section -------- */}
                <Section>
                  <SectionTitle>Order Items</SectionTitle>
                  <ItemsList>
                    {selectedOrder.items?.map((item, index) => (
                      <ItemCard key={index}>
                        <ItemImage
                          src={item.product?.image?.[0]}
                          alt={item.product?.name}
                        />
                        <ItemDetails>
                          <ItemName>{item.product?.name}</ItemName>
                          <ItemInfo>Quantity: {item.quantity}</ItemInfo>
                          <ItemInfo>Price: {formatPrice(item.price)}</ItemInfo>
                          <ItemStatusBadge $status={item.status}>
                            {getStatusText(item.status)}
                          </ItemStatusBadge>
                        </ItemDetails>
                        <ItemPrice>{formatPrice(item.price * item.quantity)}</ItemPrice>
                      </ItemCard>
                    ))}
                  </ItemsList>
                </Section>

                {/* -------- Shipping Address Section -------- */}
                <Section>
                  <SectionTitle>Shipping Address</SectionTitle>
                  <AddressText>
                    {selectedOrder.shippingAddress?.fullName && (
                      <div>
                        <Strong>{selectedOrder.shippingAddress.fullName}</Strong>
                      </div>
                    )}
                    {selectedOrder.shippingAddress?.address && (
                      <div>{selectedOrder.shippingAddress.address}</div>
                    )}
                    {selectedOrder.shippingAddress?.city && selectedOrder.shippingAddress?.state && (
                      <div>
                        {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}{" "}
                        {selectedOrder.shippingAddress.postalCode}
                      </div>
                    )}
                    {selectedOrder.shippingAddress?.country && (
                      <div>{selectedOrder.shippingAddress.country}</div>
                    )}
                    {selectedOrder.shippingAddress?.phone && (
                      <div>Phone: {selectedOrder.shippingAddress.phone}</div>
                    )}
                  </AddressText>
                </Section>

                {/* -------- Order Information Section -------- */}
                <Section>
                  <SectionTitle>Order Information</SectionTitle>
                  <InfoRow>
                    <InfoLabel>Order ID:</InfoLabel>
                    <InfoValue>{selectedOrder.orderId || selectedOrder._id}</InfoValue>
                  </InfoRow>
                  <InfoRow>
                    <InfoLabel>Date:</InfoLabel>
                    <InfoValue>{new Date(selectedOrder.createdAt).toLocaleDateString()}</InfoValue>
                  </InfoRow>
                  <InfoRow>
                    <InfoLabel>Payment Method:</InfoLabel>
                    <InfoValue>{selectedOrder.paymentMethod}</InfoValue>
                  </InfoRow>
                  <SummaryTitle>Payment Summary</SummaryTitle>
                  <SummarySection $bordered>
                    <SummaryRow>
                      <span> Subtotal:</span>
                      <span>{formatPrice(subtotal)}</span>
                    </SummaryRow>
                    <SummaryRow>
                      <span>Shipping:</span>
                      <span>+₹10/-</span>
                    </SummaryRow>
                    <SummaryRow>
                      <span>Discount:</span>
                      <span>-{formatPrice(totalDiscount)}</span>
                    </SummaryRow>
                    <SummaryRow>
                      <span>Total Amount:</span>
                      <Strong>{formatPrice(selectedOrder.totalAmount)}</Strong>
                    </SummaryRow>
                  </SummarySection>
                </Section>

              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        );
      })
        ()}
    </PageContainer>
  );
};


const LoadingText = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`;

const ErrorText = styled.div`
  color: #e53e3e;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`;

const NoOrdersText = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
  }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const OrdersGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;

  ${OrderCard}:hover & {
    transform: scale(1.05);
  }
`;

const OrderDetails = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TopSection = styled.div`
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

const ProductName = styled.h3`
  font-size: 1.25rem;
  color: #2d3748;
  margin: 0;
  flex: 1;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${({ $status }) =>
    $status === "pending" ? " #facc15" :
      $status === "delivered" ? " #4ade80" :
        $status === "cancelled" ? " #f87171" :
          "#d1d5db"};
`;

const InfoText = styled.p`
  color: #4a5568;
  margin: 0.25rem 0;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const Price = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ViewButton = styled.button`
  background-color: #4299e1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3182ce;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-height: 95vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #2d3748;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #718096;
  cursor: pointer;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #2d3748;
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.125rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f7fafc;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const SummarySection = styled.div`
  border-top: ${props => props.$bordered ? '1px solid #e5e7eb' : 'none'};
  border-bottom: ${props => props.$bordered ? '1px solid #e5e7eb' : 'none'};
  // margin-top: ${props => props.$bordered ? '1rem' : '0'};

`;

const SummaryTitle = styled.h3`
  font-weight: 600;
  color:  #2d3748;
  margin-bottom: 0.5rem;
`;

const SummaryText = styled.p`
  color: #571588;
  line-height: 1.6;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${props => props.$bold ? ' #111827' : ' #571588'};
  font-weight: ${props => props.$bold ? 'bold' : 'normal'};
  font-size: ${props => props.$large ? '1.125rem' : '1rem'};
  padding-top: ${props => props.$bordered ? '0.5rem' : '0'};
  border-top: ${props => props.$bordered ? '1px solid #e5e7eb' : 'none'};
  margin-top: ${props => props.$bordered ? '0.5rem' : '0'};
`;

const InfoLabel = styled.span`
  color: #718096;
  font-weight: 500;
`;

const InfoValue = styled.span`
  color: #2d3748;
`;

const Strong = styled.strong`
  font-weight: 600;
`;

const AddressText = styled.div`
  color: #4a5568;
  line-height: 1.6;
  padding: 1rem;
  background-color: #f7fafc;
  border-radius: 0.375rem;

  div {
    margin-bottom: 0.25rem;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ItemCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.375rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 100%;
    height: 150px;
  }
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ItemName = styled.h4`
  font-size: 1rem;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
`;

const ItemInfo = styled.p`
  color: #4a5568;
  font-size: 0.875rem;
  margin: 0;
`;

const ItemStatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  width: fit-content;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${({ $status }) =>
    $status === "pending" ? " #facc15" :
      $status === "delivered" ? " #4ade80" :
        $status === "cancelled" ? " #f87171" :
          "#d1d5db"};
  display: inline-block;
  margin-top: 0.25rem;
`;

const ItemPrice = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: #2d3748;
  flex-shrink: 0;

  @media (max-width: 480px) {
    align-self: flex-start;
  }
`;

export default OrderList;