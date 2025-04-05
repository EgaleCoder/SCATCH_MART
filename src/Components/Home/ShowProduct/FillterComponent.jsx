import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import { useFilter } from "../../../context/fillterContext";

function FilterComponent() {
  const {
    filter: { category },
    allProducts,
    filterProducts,
    updateFilterValue,
  } = useFilter();

  // Get unique categories from products
  const getFilterCategory = (data, property) => {
    let newValue = data.map((curElm) => curElm[property]);
    return ["All", ...new Set(newValue)];
  };

  const getFilterCategoryData = getFilterCategory(allProducts, "category");


  return (
    <Container>
      <Top>
        <span className="text-black font-bold text-2xl">FILLTERS</span>
        <span className="text-gray-700">{filterProducts.length}+ Products</span>
        <hr />
      </Top>
      <SearchBar />

      <Accordion>
        <AccordionSummary>
          <span className="text-2xl">Catagory</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="16"
            height="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </AccordionSummary>
        <AccordionContent>
          {getFilterCategoryData.map((curElm, index) => {
            return (
              <CheckboxLabel htmlFor={`category-${index}`} key={index}>
                <CheckboxInput
                  type="radio"
                  id={`category-${index}`}
                  name="category"
                  onChange={updateFilterValue}
                  value={curElm}
                  checked={category === curElm} 
                />
                {curElm}
              </CheckboxLabel>
            );
          })}
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <span className="text-2xl">Price</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="16"
            height="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </AccordionSummary>
        <AccordionContent>
          <CheckboxGroup>
            <CheckboxLabel htmlFor="Option1">
              <CheckboxInput type="checkbox" id="Option1" />
              Under ₹199
            </CheckboxLabel>
            <CheckboxLabel htmlFor="Option2">
              <CheckboxInput type="checkbox" id="Option2" />
              Under ₹399
            </CheckboxLabel>
            <CheckboxLabel htmlFor="Option3">
              <CheckboxInput type="checkbox" id="Option3" />
              Under ₹599
            </CheckboxLabel>
            <CheckboxLabel htmlFor="Option4">
              <CheckboxInput type="checkbox" id="Option4" />
              Under ₹799
            </CheckboxLabel>
            <CheckboxLabel htmlFor="Option4">
              <CheckboxInput type="checkbox" id="Option5" />
              Above ₹899
            </CheckboxLabel>
          </CheckboxGroup>
        </AccordionContent>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <span className="text-2xl">Gender</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="16"
            height="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </AccordionSummary>
        <AccordionContent>
          <CheckboxGroup>
            <CheckboxLabel htmlFor="Option1">
              <CheckboxInput type="checkbox" id="Option1" />
              Men's
            </CheckboxLabel>
            <CheckboxLabel htmlFor="Option2">
              <CheckboxInput type="checkbox" id="Option2" />
              Women's
            </CheckboxLabel>
            <CheckboxLabel htmlFor="Option3">
              <CheckboxInput type="checkbox" id="Option3" />
              Kid's
            </CheckboxLabel>
          </CheckboxGroup>
        </AccordionContent>
      </Accordion>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px; /* Fixed width for uniformity */
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Accordion = styled.details`
  position: relative;
  overflow: hidden;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  background: white;
  width: 100%;
  &[open] summary svg {
    transform: rotate(180deg);
  }
`;

const AccordionSummary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  width: 100%;

  &:hover {
    color: #111827;
  }

  &::-webkit-details-marker {
    display: none;
  }
`;

const AccordionContent = styled.div`
  border-top: 1px solid #d1d5db;
  background-color: white;
  padding: 0.75rem;
`;

const CheckboxGroup = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const CheckboxInput = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  border: 1px solid #374151;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const SelectDropdown = styled.select`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const OptionDropdown = styled.option`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

export default FilterComponent;
