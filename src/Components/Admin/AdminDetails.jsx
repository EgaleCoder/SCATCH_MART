import { useAdminContext } from "../../context/adminContext";

const AdminDetails = () => {
  const { admin } = useAdminContext();
  const { adminDetails } = admin;
  // console.log("Admindetails:", adminDetails);
  return (
    <div>
      <p>Admin details</p>
      <h1>Name: {adminDetails.fullname}</h1>
      <h1>E-mail:{adminDetails.email}</h1>
    </div>
  );
};
export default AdminDetails;
