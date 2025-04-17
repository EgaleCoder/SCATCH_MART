import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MyImg = ({ imgs }) => {
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    if (imgs && imgs.length > 0) {
      setMainImg(imgs[0]);
    }
  }, [imgs]); 
  return (
    <ImageSection>
      {/* 1st Column */}
      <div className="grid grid-four-column">
        {imgs &&
          imgs.map((curElm, index) => {
            return (
              <figure key={index}>
                <img
                  src={curElm}
                  alt={`product-img-${index}`}
                  className="box-img-style"
                  onClick={() => {
                    setMainImg(curElm);
                  }}
                />
              </figure>
            );
          })}
      </div>
      {/* 2nd column  */}

      <div className="main-screen">
        {mainImg ? <img src={mainImg} alt="image" /> : <p>Loading image...</p>}
      </div>
    </ImageSection>
  );
};

const ImageSection = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: 0.2fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      height: 90%;
      border: 1px solid gray;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
    }
  }

  .main-screen {
    display: grid;
    height: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImg;
