import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  position: relative;
  overflow-x: auto;
  border-radius: 0.5rem;
  width: 100%;
`;

const Table = styled.table`
  width: 98%;
  font-size: 0.875rem;
  text-align: left;
  color:;
`;

const TableHead = styled.thead`
  background-color: #0c737e;
  color: black;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

const Row = styled.tr`
  background-color: ${({ theme }) =>
    theme === "dark" ? "#1f2937" : "#ffffff"};
  border-bottom: 1px solid
    ${({ theme }) => (theme === "dark" ? "#374151" : "#e5e7eb")};

  &:hover {
    background-color: rgb(46, 126, 135);
  }
`;

// Main Component
const UserTable = () => {
  const users = [
    {
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      role: "React Developer",
      status: "Online",
      img: "/docs/images/people/profile-picture-1.jpg",
      online: true,
    },
    {
      name: "Bonnie Green",
      email: "bonnie@flowbite.com",
      role: "Designer",
      status: "Online",
      img: "/docs/images/people/profile-picture-3.jpg",
      online: true,
    },
    {
      name: "Jese Leos",
      email: "jese@flowbite.com",
      role: "Vue JS Developer",
      status: "Online",
      img: "/docs/images/people/profile-picture-2.jpg",
      online: true,
    },
    {
      name: "Thomas Lean",
      email: "thomes@flowbite.com",
      role: "UI/UX Engineer",
      status: "Online",
      img: "/docs/images/people/profile-picture-5.jpg",
      online: true,
    },
    {
      name: "Leslie Livingston",
      email: "leslie@flowbite.com",
      role: "SEO Specialist",
      status: "Offline",
      img: "/docs/images/people/profile-picture-4.jpg",
      online: false,
    },
  ];

  return (
    <Container>
      <p className="text-2xl m-2 text-center">Active Users</p>
      <Table>
        <TableHead>
          <tr>
            <th className="p-4"></th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Position</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </TableHead>
        <tbody>
          {users.map((user, idx) => (
            <Row key={idx}>
              <td className="p-4">
                <input type="checkbox" />
              </td>
              <td className="px-6 py-4 flex items-center gap-3">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    {user.name}
                  </div>
                  <div className="font-normal text-gray-700">{user.email}</div>
                </div>
              </td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">
                <a href="#" className="text-blue-600 hover:underline">
                  Edit user
                </a>
              </td>
            </Row>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserTable;
