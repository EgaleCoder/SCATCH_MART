import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BagsCategories = ({ imageUrl }) => {
    const [croppedImages, setCroppedImages] = useState({});

    useEffect(() => {
        const img = new window.Image();
        img.src = imageUrl;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            function cropImage(sx, sy, sw, sh) {
                canvas.width = sw;
                canvas.height = sh;
                ctx.clearRect(0, 0, sw, sh);
                ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
                return canvas.toDataURL("image/png");
            }

            setCroppedImages({
                duffle: cropImage(200, 185, 80, 80),
                laptop: cropImage(135, 120, 70, 70),
                womenBag: cropImage(330, 60, 65, 65),
                travel: cropImage(125, 182, 80, 80),
                wallet: cropImage(5, -5, 70, 70),
                backpack: cropImage(280, 190, 65, 65),
                TrollyBag: cropImage(330, 175, 70, 90),
                schoolbag: cropImage(67, 190, 65, 65),
                hand: cropImage(130, 0, 70, 70),
            });
        };
    }, [imageUrl]);

    const categories = [
        { icon: croppedImages.duffle, name: "Duffel Bags" },
        { icon: croppedImages.laptop, name: "Laptop Bags" },
        { icon: croppedImages.womenBag, name: "Women Bags" },
        { icon: croppedImages.travel, name: "Travel Bags" },
        { icon: croppedImages.wallet, name: "Wallets" },
        { icon: croppedImages.backpack, name: "Backpacks" },
        { icon: croppedImages.TrollyBag, name: "Trolly Bags" },
        { icon: croppedImages.schoolbag, name: "School Bags" },
        { icon: croppedImages.hand, name: "Handbags" },
    ];

    return (
        <CategorySection>
            <CategoryWrapper>
                {categories.map((cat, index) => (
                    <Box key={index}>
                        <Image>
                            <img src={cat.icon} alt={cat.name} />
                        </Image>
                        <Name>{cat.name}</Name>
                    </Box>
                ))}
            </CategoryWrapper>
        </CategorySection>
    )
}



const CategorySection = styled.div`
  background-color: white;
  padding: 20px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  overflow-x: auto; /* allows horizontal scroll on small screens */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    padding: 10px;
    width: 100%;
    justify-content: space-between;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 25px;
  height: 120px;
  flex-wrap: nowrap; /* keeps items in one row */
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    gap: 10px;
    transform: scale(0.9); 
    transform-origin: top center;
  }

  @media (max-width: 400px) {
    gap: 8px;
    transform: scale(0.8);
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: #f8f9fa;
  }

  &:hover div:first-child {
   background:none;
  }

  @media (max-width: 640px) {
    padding: 12px;
    background: #f8f9fa;
  }
  @media (max-width: 400px) {
    padding: 10px;
    background: #f8f9fa;
  }
`;

const Image = styled.div`
img{
  width: 80px;
  height: 80px;
}
  background: linear-gradient(135deg, #f1e8fa 0%, #77b8f1 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  margin-bottom: 10px;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
    background: #f8f9fa;
  }

  @media (max-width: 400px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
    background: #f8f9fa;
  }
`;

const Name = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 640px) {
    font-size: 8px;
  }

  @media (max-width: 400px) {
    font-size: 6px;
  }
`;

export default BagsCategories