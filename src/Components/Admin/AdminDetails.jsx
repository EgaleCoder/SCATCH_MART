import React from "react";
import styled from "styled-components";
import { useAdminContext } from "../../context/adminContext";

const AdminDetails = () => {
  const { admin } = useAdminContext();
  const { adminDetails } = admin;

  return (
    <PageContainer>
      <Container>
        <ProfileCard>
          <Header>
            <Title>Admin Profile</Title>
            <Badge>Administrator</Badge>
          </Header>

          <ProfileContent>
            <AvatarSection>
              <Avatar>
                {adminDetails?.fullname?.charAt(0)?.toUpperCase() || "A"}
              </Avatar>
              <AvatarInfo>
                <FullName>{adminDetails?.fullname || "Admin User"}</FullName>
                <Role>System Administrator</Role>
              </AvatarInfo>
            </AvatarSection>

            <Divider />

            <DetailsSection>
              <SectionTitle>Personal Information</SectionTitle>
              
              <DetailRow>
                <DetailLabel>
                  <IconWrapper>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                    </svg>
                  </IconWrapper>
                  Full Name
                </DetailLabel>
                <DetailValue>{adminDetails?.fullname || "N/A"}</DetailValue>
              </DetailRow>

              <DetailRow>
                <DetailLabel>
                  <IconWrapper>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </IconWrapper>
                  Email Address
                </DetailLabel>
                <DetailValue>{adminDetails?.email || "N/A"}</DetailValue>
              </DetailRow>

              <DetailRow>
                <DetailLabel>
                  <IconWrapper>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                    </svg>
                  </IconWrapper>
                  Account Status
                </DetailLabel>
                <StatusBadge $active>Active</StatusBadge>
              </DetailRow>

              <DetailRow>
                <DetailLabel>
                  <IconWrapper>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM7 11h5v5H7z" />
                    </svg>
                  </IconWrapper>
                  Member Since
                </DetailLabel>
                <DetailValue>
                  {adminDetails?.createdAt 
                    ? new Date(adminDetails.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })
                    : "N/A"}
                </DetailValue>
              </DetailRow>
            </DetailsSection>

            <Divider />

            <ActionsSection>
              <SectionTitle>Quick Actions</SectionTitle>
              <ActionButtons>
                <ActionButton $primary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  Edit Profile
                </ActionButton>
                <ActionButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                  </svg>
                  Change Password
                </ActionButton>
              </ActionButtons>
            </ActionsSection>
          </ProfileContent>
        </ProfileCard>
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
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #093e44 0%, #0c737e 100%);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Badge = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const ProfileContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #093e44 0%, #0c737e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FullName = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Role = styled.p`
  font-size: 1rem;
  color: #718096;
  margin: 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 2rem 0;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f7fafc;
  border-radius: 0.5rem;
  border-left: 3px solid #093e44;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const DetailLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #4a5568;
`;

const IconWrapper = styled.div`
  color: #093e44;
  display: flex;
  align-items: center;
`;

const DetailValue = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
`;

const StatusBadge = styled.span`
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${props => props.$active ? '#4ade80' : '#f87171'};
  color: white;
`;

const ActionsSection = styled.div`
  margin-top: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  
  ${props => props.$primary ? `
    background-color: #093e44;
    color: white;
    
    &:hover {
      background-color: #0c737e;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  ` : `
    background-color: #e2e8f0;
    color: #2d3748;
    
    &:hover {
      background-color: #cbd5e0;
      transform: translateY(-1px);
    }
  `}

  &:active {
    transform: translateY(0);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #093e44 0%, #0c737e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #718096;
  font-weight: 500;
`;

export default AdminDetails;