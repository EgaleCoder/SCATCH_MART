import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 2.5rem 0;
  background-color: black;
  width: 100%;
  color: white;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  margin-left: 40px;
  margin-right: 40px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const LogoWrapper = styled.div`
  grid-column: span 12;

  @media (min-width: 768px) {
    grid-column: span 5;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo-circle {
    width: 3rem;
    height: 3rem;
    margin-right: 8px;
    background-color: rgba(8, 12, 249, 0.55);
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    justify-content: center;
    border-radius: 50%;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  a {
    display: block;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.875rem;
  }

  .bts {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const LinkGroup = styled.div`
  grid-column: span 4;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    grid-column: span 2;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    padding-bottom: 1rem;
    font-size: 1.25rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #ccc;
    }
  }

  p {
    padding-bottom: 0.5rem;
    font-size: 1.125rem;
    font-weight: 500;
  }
`;

const SmallGroup = styled(LinkGroup)`
  @media (min-width: 768px) {
    grid-column: span 3;
  }

  h1 {
    font-size: 2rem;
    padding-bottom: 0.75rem;
  }

  p {
    font-size: 14px;
  }
`;

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const Legal = styled.div`
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    display: block;
    align-items: flex-start;
    text-align: left;
  }

  a {
    margin-left: 1rem;
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #ccc;
    }

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 0.5rem;

  @media (min-width: 1024px) {
    justify-content: flex-end;
    padding-top: 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 9999px;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }

  .playstore-button {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid #000;
    border-radius: 15px;
    background-color: white;
    padding: 0.75rem 1rem;
    height: 5rem;
    width: 13rem;
    color: black;
    transition: all 0.2s ease;
    text-decoration: none;
    flex: 1 1 45%;
    min-width: 10rem;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 18rem;
      justify-content: center;
    }

    &:hover {
      background-color: #f3f3f3;
    }
  }

  .icon {
    height: 1.5rem;
    width: 1.5rem;

    @media (max-width: 480px) {
      height: 1.25rem;
      width: 1.25rem;
    }
  }

  .texts {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.4;

    @media (max-width: 480px) {
      margin-left: 0.5rem;
    }
  }

  .text-1 {
    font-size: 0.75rem;

    @media (max-width: 480px) {
      font-size: 0.65rem;
    }
  }

  .text-2 {
    font-weight: 600;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Grid>
        <LogoWrapper>
          <div className="logo">
            <div className="logo-circle">S</div>
            <span>SCATCH</span>
          </div>
          <div className="col-span-6 pb-3 text-center md:text-left md:col-span-2">
            <p className="pb-1 text-lg font-medium">Category</p>
            <ul>
              <li>
                <a href="#" className="hover:dark:text-gray-400">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:dark:text-gray-400">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:dark:text-gray-400">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:dark:text-gray-400">
                  Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:dark:text-gray-400">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </LogoWrapper>

        <LinkGroup>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">
                Become a <br /> supplier
              </a>
            </li>
            <li>
              <a href="#">Hall of Fame</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </LinkGroup>

        <LinkGroup>
          <ul>
            <li>
              <a href="#">
                Legal and <br />
                Policies
              </a>
            </li>
            <li>
              <a href="#">
                Scatch Tech <br /> Blog
              </a>
            </li>
            <li>
              <a href="#">
                Notices and <br /> Returns
              </a>
            </li>
          </ul>
        </LinkGroup>

        <SmallGroup>
          <h1>Contact Us</h1>
          <p>
            Fashnear Technologies Pvt. Ltd. CIN: U74900KA2015PTC082263
            <br />
            3rd Floor, Wing-E, Helios Business Park,
            <br />
            Kadubeesanahalli Village, Bangalore, Karnataka, 560103 India.
            <br />
            Email: query@scatch.com
            <br />© 2024-2025 Scatch.com
          </p>
        </SmallGroup>
      </Grid>

      <BottomRow>
        <Legal>
          <span>©2021 All rights reserved</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </Legal>
        <Socials>
          <a href="#" title="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>

          <a href="#" title="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.558-3.594-1.558-2.723 0-4.928 2.205-4.928 4.928 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.869 3.216 2.19 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.418-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.396 4.768 2.211 7.557 2.211 9.054 0 14.002-7.496 14.002-13.986 0-.21-.004-.423-.014-.634.961-.695 1.8-1.562 2.46-2.549z" />
            </svg>
          </a>

          <a href="#" title="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
    3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
    -.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
    1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.304 
    3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 
    0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 
    1.005-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 
    2.045.138 3.003.404 2.28-1.552 3.285-1.23 
    3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
    1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 
    5.92.42.36.81 1.096.81 2.22 0 1.606-.015 
    2.896-.015 3.286 0 .315.21.69.825.57C20.565 
    22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a href="#" title="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5a4.25 4.25 0 0 1-4.25-4.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.88a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26Z" />
            </svg>
          </a>
          <a href="#" title="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.675 0h-21.35C.596 0 0 .595 0 1.326v21.348C0 23.404.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116C23.404 24 24 23.404 24 22.674V1.326C24 .595 23.404 0 22.675 0z" />
            </svg>
          </a>
        </Socials>
      </BottomRow>
    </FooterWrapper>
  );
}
