import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  overflow-x: auto;
  background-color: white;
  color: #1f2937; /* Tailwind's gray-800 */
  font-size: 0.875rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #d1d5db; /* gray-300 */
  border-collapse: collapse;
`;

const THead = styled.thead`
  background-color: #f3f4f6; /* gray-100 */
  font-weight: 600;
  font-size: 1rem;
  border-bottom: 1px solid #d1d5db;
`;

const TBodyRow = styled.tr`
  border-top: 1px solid #d1d5db;
`;

const TCell = styled.td`
  border-right: 1px solid #d1d5db;
  padding: 0.75rem;
  vertical-align: top;
`;

const THeadCell = styled.th`
  border-right: 1px solid #d1d5db;
  padding: 0.75rem;
  text-align: left;
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Badge = styled.span`
  display: inline-block;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #4b5563;
  background-color: transparent;
`;

const DetailsButton = styled.button`
  font-size: 0.75rem;
  color: #3b82f6;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = styled.tfoot`
  background-color: #f3f4f6;
  border-top: 1px solid #d1d5db;
`;

function ActiveUser() {
  
  const users = [
    {
      name: 'Hart Hagerty',
      country: 'United States',
      job: 'Zemlak, Daniel and Leannon',
      title: 'Desktop Support Technician',
      color: 'Purple',
      mobile: '+1 202-555-0173',
      img: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    },
    {
      name: 'Brice Swyre',
      country: 'China',
      job: 'Carroll Group',
      title: 'Tax Accountant',
      color: 'Red',
      mobile: '+86 139-8888-8888',
      img: 'https://img.daisyui.com/images/profile/demo/3@94.webp',
    },
    {
      name: 'Marjy Ferencz',
      country: 'Russia',
      job: 'Rowe-Schoen',
      title: 'Office Assistant I',
      color: 'Crimson',
      mobile: '+7 495 123-4567',
      img: 'https://img.daisyui.com/images/profile/demo/4@94.webp',
    },
    {
      name: 'Yancy Tear',
      country: 'B razil',
      job: 'Wyman-Ledner',
      title: 'Community Outreach Specialist',
      color: 'Indigo',
      mobile: '+55 21 99999-1234',
      img: 'https://img.daisyui.com/images/profile/demo/5@94.webp',
    },
  ];

  return (
    <TableWrapper>
      <StyledTable>
        <THead>
          <tr>
            <THeadCell>
             Sn
            </THeadCell>
            <THeadCell>Name</THeadCell>
            <THeadCell>Email</THeadCell>
            <THeadCell>Mobile No</THeadCell>
            <THeadCell>Oders</THeadCell>
            <THeadCell>Remove User</THeadCell>
          </tr>
        </THead>
        <tbody>
          {users.map((person, index) => (
            <TBodyRow key={index}>
              <TCell>
            
            {index +1}
              </TCell>
              <TCell>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Avatar>
                    <img src={person.img} alt={person.name} width="100%" height="100%" />
                  </Avatar>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{person.name}</div>
                    <div style={{ fontSize: '0.875rem', opacity: 0.5 }}>{person.country}</div>
                  </div>
                </div>
              </TCell>
              <TCell>
                {person.job}
                <br />
                <Badge>{person.title}</Badge>
              </TCell>
              <TCell>{person.mobile}</TCell>
              <TCell>{person.color}</TCell>
              <TCell>
                <DetailsButton>Delete</DetailsButton>
              </TCell>
            </TBodyRow>
          ))}
        </tbody>
        
           
      </StyledTable>
    </TableWrapper>
  );
}

export default ActiveUser;
