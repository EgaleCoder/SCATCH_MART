// QuantitySelector.js
import styled from 'styled-components';

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb; /* Tailwind: border-gray-200 */
  border-radius: 0.125rem;   /* Tailwind: rounded-sm */
`;

const QuantityButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  color: #4b5563; /* Tailwind: text-gray-600 */
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

const QuantityInput = styled.input`
  height: 2.5rem;
  width: 4rem;
  border: none;
  text-align: center;
  font-size: 0.875rem; /* Tailwind: sm:text-sm */
  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    appearance: none;
  }

  &::-moz-appearance {
    appearance: textfield;
  }
`;

export const QuantitySelector = ({ item, updateQuantity }) => {
  if (!item) return null; // <- prevents crashing

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    updateQuantity(item.id, Math.min(5, Math.max(1, value)));
  };

  const increase = () => {
    updateQuantity(item.id, Math.min(5, item.quantity + 1));
  };

  const decrease = () => {
    updateQuantity(item.id, Math.max(1, item.quantity - 1));
  };

  return (
    <div>
      <label htmlFor={`quantity-${item.id}`} style={{ display: "none" }}>
        Quantity
      </label>
      <QuantityWrapper>
        <QuantityButton type="button" onClick={decrease}>
          &minus;
        </QuantityButton>
        <QuantityInput
          type="number"
          id={`quantity-${item.id}`}
          min="1"
          max="5"
          value={item.quantity}
          onChange={handleChange}
        />
        <QuantityButton type="button" onClick={increase}>
          +
        </QuantityButton>
      </QuantityWrapper>
    </div>
  );
};

