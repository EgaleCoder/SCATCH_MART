import React from "react";
import styled from "styled-components";
import paymentTypeImg from '../../assets/paymentType.png';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #f5f5f5, #bce1ff, #f5f5f5);
  padding: 3rem 6rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FooterWrapper = styled.div`
  max-width: 1280px;
  margin: 2rem auto;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  text-align: center;

  }
`;

const LogoSection = styled.div`
text-align: start;
  img {
    height: 2.25rem;
  }

  p {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #4b5563;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const GridLinks = styled.div`
  display: grid;
  gap: 1.5rem;
  justify-content: center;
  text-align: center;

  @media (min-width: 640px) {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const LinkSection = styled.div`
text-align: start;
  p {
    font-weight: 500;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      font-size: 0.875rem;
      color: #6b7280;
      text-decoration: none;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.75;
      }
    }
  }

  @media (max-width: 640px) {
    p {
      font-size: 0.9rem;
      text-align: center;
    }

    nav a {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

const BottomFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 2rem;
flex-wrap: wrap;
gap: 1rem;

@media (max-width: 768px) {
  flex-direction: column;
  text-align: center;
  gap: 1.5rem;
}
`;

const CopyRight = styled.p`
  font-size: 0.75rem;
  color: #1f2937;
  @media (max-width: 640px) {
    font-size: 0.7rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1.5rem;
  color: #4b5563;

  a {
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.75;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: currentColor;
    }
  }

  @media (max-width: 640px) {
    gap: 1rem;
    justify-content: center;
  text-align:center;
  }
`;

const ImagesPaymentType = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 200px;
    height: auto;
  }

  @media (max-width: 640px) {
    img {
      max-width: 150px;
    }
  }
`;



const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <LogoSection>
            <span className="text-[#571588] font-bold text-2xl mb-2 block ">SCATCH MART</span>
            <h1>
              Shop Non-Stop on Scatch
            </h1>
            <p>
              Trusted by thousands Enjoy Cash on Delivery, Free Delivery,
              <br /> and a seamless shopping experience with guaranteed
              satisfaction. <br /> Cash on Delivery | Free Delivery | Fast
              Delivery :)
            </p>
          </LogoSection>
          <GridLinks>
            {[
              {
                title: "Company",
                links: ["About", "Meet the Team", "History", "Careers"],
              },
              {
                title: "Products",
                links: [
                  "Travel Bags",
                  "Backpacks",
                  "Duffle Bags",
                  "Handbags",
                  "Wallets",
                  "Laptop Bags",
                ],
              },
              {
                title: "Helpful Links",
                links: ["Contact", "FAQs", "Customer Support", "Shipping", "Returns"],
              },
              {
                title: "Legal",
                links: [
                  "Privacy Policy",
                  "Cookie Policy",
                  "Terms & Conditions",
                  "Returns Policy",
                  "Accessibility",
                ],
              },
            ].map((section, index) => (
              <LinkSection key={index}>
                <p>{section.title}</p>
                <nav>
                  {section.links.map((link, i) => (
                    <a href="#" key={i}>
                      {link}
                    </a>
                  ))}
                </nav>
              </LinkSection>
            ))}
          </GridLinks>
        </FooterWrapper>
        <hr style={{ borderColor: "#571588" }} />
        <BottomFooter>
          <CopyRight>Copyright © Scatch-Mart. All rights reserved.</CopyRight>
          <SocialLinks>
            {/* Instagram */}
            <a href="#" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.88a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26Z" />
              </svg>
            </a>

            {/* Email */}
            <a href="#" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.558-3.594-1.558-2.723 0-4.928 2.205-4.928 4.928 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.869 3.216 2.19 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.418-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.396 4.768 2.211 7.557 2.211 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.423-.014-.634.961-.695 1.8-1.562 2.46-2.549z" />
              </svg>
            </a>


          </SocialLinks>
          <ImagesPaymentType>
            <img src={paymentTypeImg} alt="Payment Type" />
          </ImagesPaymentType>
        </BottomFooter>
      </FooterContainer>
    </>
  );
};
export default Footer;
