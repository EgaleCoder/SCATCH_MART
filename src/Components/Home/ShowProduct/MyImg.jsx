import React, { useState } from "react";
import styled from "styled-components";

const MyImg = ({ img }) => {
  // const [mainImg, setMainImg] = useState(imgs[0]);
  return (
    <ImageSection>
      {/* 1st Column */}
      <div className="grid grid-four-column">
        {/* {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-img-style"
                key={index}
                onClick={() => {
                  setMainImg(curElm);
                }}
              />
            </figure>
          );
        })} */}
      </div>
      {/* 2nd column  */}

      <div className="main-screen">
        <img src={img} alt="image" />
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
