import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { useOrderContext } from '../../context/orderContext';
import { useCartContext } from '../../context/cartContext';
import { formatPrice } from '../../utils/priceFormat';



export default function PlaceOrder() {
  const { cart } = useCartContext();
  const {
    formData,
    currentStep,
    showSuccessModal,
    orderId,
    loading,
    orderData,
    totalQuantity,
    totalAmount,
    error,
    dispatch,
    nextStep,
    prevStep,
    placeOrder,
    resetOrder,
    hideSuccessModal
  } = useOrderContext();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const totalDiscount = cart.reduce(
    (acc, item) =>
      acc + item.product.price * item.quantity * (item.product.discount / 100),
    0
  );



  const steps = [
    { id: 1, name: 'Address' },
    { id: 2, name: 'Payment' },
    { id: 3, name: 'Confirm' }
  ];

  const handleInputChange = (e) => {
    dispatch({
      type: 'SET_FORM_DATA',
      payload: { [e.target.name]: e.target.value }
    });
  };

  const handleSubmit = async () => {
    await placeOrder(formData);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {showSuccessModal && (
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>
                <ModalIconWrapper>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </ModalIconWrapper>
                <ModalTitle>Order Confirmed!</ModalTitle>
                <ModalSubtitle>Thank you for your purchase</ModalSubtitle>
              </ModalHeader>

              <ModalBody>
                <OrderIdSection>
                  <p>Your order ID is</p>
                  <p>{orderId}</p>
                </OrderIdSection>

                <OrderDetails>
                  <DetailRow>
                    <span>Total Items:</span>
                    <span>{totalQuantity}</span>
                  </DetailRow>
                  <DetailRow>
                    <span>Order Total:</span>
                    <span>{formatPrice(totalAmount)}</span>
                  </DetailRow>
                  <DetailRow>
                    <span>Delivery to:</span>
                    <span>{formData.city}, {formData.state}</span>
                  </DetailRow>
                  <DetailRow>
                    <span>Payment Method:</span>
                    <span>
                      {formData.paymentMethod === 'Card' ? 'Credit/Debit Card' : formData.paymentMethod === 'UPI' ? 'UPI' : formData.paymentMethod === 'COD' ? 'Cash on Delivery' : ''}
                    </span>
                  </DetailRow>
                </OrderDetails>

                <ConfirmationText>
                  A confirmation email has been sent to your registered email address.
                </ConfirmationText>
                <NavLink to="/cart">
                  <ContinueButton
                    onClick={() => {
                      hideSuccessModal();
                      resetOrder();
                    }}
                  >
                    Continue Shopping
                  </ContinueButton>
                </NavLink>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}

        <MaxWidthContainer>
          <ProgressContainer>
            <StepsWrapper>
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <StepItem>
                    <StepCircle $active={currentStep >= step.id}>
                      {step.id}
                    </StepCircle>
                    <StepLabel $active={currentStep >= step.id}>
                      {step.name}
                    </StepLabel>
                  </StepItem>
                  {index < steps.length - 1 && (
                    <StepConnector $completed={currentStep > step.id} />
                  )}
                </React.Fragment>
              ))}
            </StepsWrapper>
          </ProgressContainer>

          <FormCard>
            {currentStep === 1 && (
              <div>
                <FormTitle>Delivery Address</FormTitle>

                <FormGrid>
                  <FormGroup $fullWidth>
                    <Label>Full Name *</Label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Abhijeet Tomar"
                    />
                  </FormGroup>

                  <FormGroup $fullWidth>
                    <Label>Phone Number *</Label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 1234567890"
                    />
                  </FormGroup>

                  <FormGroup $fullWidth>
                    <Label>Address Line *</Label>
                    <Input
                      type="text"
                      name="addressLine"
                      value={formData.addressLine}
                      onChange={handleInputChange}
                      placeholder="Street address, P.O. box"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>City *</Label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New Delhi"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>State/Province *</Label>
                    <Input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Delhi"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>ZIP/Postal Code *</Label>
                    <Input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Country *</Label>
                    <Input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="India"
                    />
                  </FormGroup>
                </FormGrid>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <FormTitle>Payment Method</FormTitle>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <PaymentOption>
                    <RadioInput
                      type="radio"
                      name="paymentMethod"
                      value="Card"
                      checked={formData.paymentMethod === 'Card'}
                      onChange={handleInputChange}
                    />
                    <PaymentLabel>Credit/Debit Card</PaymentLabel>
                  </PaymentOption>

                  {formData.paymentMethod === 'Card' && (
                    <CardDetailsContainer>
                      <div>
                        <Label>Card Number *</Label>
                        <Input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                        />
                      </div>

                      <div>
                        <Label>Cardholder Name *</Label>
                        <Input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                        <div>
                          <Label>Expiry Date *</Label>
                          <Input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                          />
                        </div>

                        <div>
                          <Label>CVV *</Label>
                          <Input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength="4"
                          />
                        </div>
                      </div>
                    </CardDetailsContainer>
                  )}

                  <PaymentOption>
                    <RadioInput
                      type="radio"
                      name="paymentMethod"
                      value="UPI"
                      checked={formData.paymentMethod === 'UPI'}
                      onChange={handleInputChange}
                    />
                    <PaymentLabel>UPI</PaymentLabel>
                  </PaymentOption>

                  <PaymentOption>
                    <RadioInput
                      type="radio"
                      name="paymentMethod"
                      value="COD"
                      checked={formData.paymentMethod === 'COD'}
                      onChange={handleInputChange}
                    />
                    <PaymentLabel>Cash on Delivery</PaymentLabel>
                  </PaymentOption>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <FormTitle>Confirm Your Order</FormTitle>

                <SummaryCard>
                  <SummarySection>
                    <SummaryTitle>Delivery Address</SummaryTitle>
                    <SummaryText>
                      {formData.fullName}<br />
                      {formData.phone}<br />
                      {formData.addressLine}<br />
                      {formData.city}, {formData.state} {formData.postalCode}<br />
                      {formData.country}
                    </SummaryText>
                  </SummarySection>

                  <SummarySection $bordered>
                    <SummaryTitle>Payment Method</SummaryTitle>
                    <SummaryText>
                      {formData.paymentMethod === 'Credit/Debit Card'}
                      {formData.paymentMethod === 'UPI'}
                      {formData.paymentMethod === 'COD'}
                      {formData.paymentMethod === 'Card' && formData.cardNumber && (
                        <span style={{ display: 'block', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                          Card ending in {formData.cardNumber.slice(-4)}
                        </span>
                      )}
                    </SummaryText>
                  </SummarySection>

                  <SummarySection $bordered>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryRow>
                      <span>Subtotal</span>
                      <span>{formatPrice(Number(subtotal.toFixed(2)))}</span>
                    </SummaryRow>
                    <SummaryRow>
                      <span>Shipping</span>
                      <span>+₹10/-</span>
                    </SummaryRow>
                    <SummaryRow>
                      <span>Discount</span>
                      <span>-{formatPrice(Number(totalDiscount.toFixed(2)))}</span>
                    </SummaryRow>
                    <SummaryRow $bold $large $bordered>
                      <span>Total</span>
                      <span>{formatPrice(Number(subtotal + 10 - totalDiscount.toFixed(2)))}</span>
                    </SummaryRow>
                  </SummarySection>
                </SummaryCard>
              </div>
            )}

            <ButtonContainer>
              <Button
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.25rem' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </Button>

              {currentStep < 3 ? (
                <Button onClick={nextStep} $variant="primary">
                  Next
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '0.25rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              ) : (
                <Button onClick={handleSubmit} $variant="success">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Place Order
                </Button>
              )}
            </ButtonContainer>
          </FormCard>
        </MaxWidthContainer>
      </Container>
    </>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom right white, #e0e7ff);
  padding: 2rem 1rem;
`;

const MaxWidthContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const ProgressContainer = styled.div`
  margin-bottom: 2rem;
`;

const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StepCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  background-color: ${props => props.$active ? '#571588' : '#d1d5db'};
  color: ${props => props.$active ? 'white' : '#571588'};
  font-size: 1.125rem;
  font-weight: bold;
`;

const StepLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.$active ? '#571588' : ' #6b7280'};
`;

const StepConnector = styled.div`
  flex: 1;
  height: 0.25rem;
  margin: 0 1rem;
  transition: all 0.3s;
  background-color: ${props => props.$completed ? ' #571588' : ' #d1d5db'};
`;

const FormCard = styled.div`
    background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormGroup = styled.div`
  grid-column: ${props => props.$fullWidth ? 'span 2' : 'span 1'};
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #571588;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #571588;
  }
`;

const RadioInput = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: #571588;
  margin-right: 0.75rem;
`;

const PaymentLabel = styled.label`
  flex: 1;
  font-weight: 500;
  color: #111827;
  cursor: pointer;
`;

const CardDetailsContainer = styled.div`
  margin-left: 1.75rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SummaryCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

const SummarySection = styled.div`
  padding-top: ${props => props.$bordered ? '1rem' : '0'};
  border-top: ${props => props.$bordered ? '1px solid #e5e7eb' : 'none'};
  margin-top: ${props => props.$bordered ? '1rem' : '0'};
`;

const SummaryTitle = styled.h3`
  font-weight: 600;
  color: #374151;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  background-color: ${props => {
    if (props.disabled) return ' #e5e7eb';
    if (props.$variant === 'success') return ' #16a34a';
    if (props.$variant === 'primary') return ' #571588';
    return ' #e5e7eb';
  }};
  color: ${props => props.disabled ? '#9ca3af' : props.$variant ? 'white' : ' #374151'};

  &:hover {
    background-color: ${props => {
    if (props.disabled) return ' #e5e7eb';
    if (props.$variant === 'success') return ' #15803d';
    if (props.$variant === 'primary') return ' #571588';
    return ' #d1d5db';
  }};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 28rem;
  width: 100%;
  margin: 0 1rem;
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalHeader = styled.div`
  background: linear-gradient(to right, #4ade80, #16a34a);
  padding: 2rem;
  text-align: center;
`;

const ModalIconWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  animation: ${bounce} 1s infinite;

  svg {
    width: 3rem;
    height: 3rem;
    color: #60a5fa;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const ModalSubtitle = styled.p`
  color: #dcfce7;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const OrderIdSection = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  p:first-child {
    color: #571588;
    margin-bottom: 0.5rem;
  }

  p:last-child {
    font-size: 1.5rem;
    font-weight: bold;
    color: #571588;
  }
`;

const OrderDetails = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  span:first-child {
    color: #571588;
  }

  span:last-child {
    font-weight: 600;
    text-align: right;
  }
`;

const ConfirmationText = styled.p`
  text-align: center;
  color: #571588;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const ContinueButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #571588;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #571588;
  }
`;
