import { useSelector } from "react-redux";
import SellerProfilePrivate from "./seller-profile-private";
import SellerProfilePublic from "./seller-profile-public";
import SheinProfile from "./shein";

const SellerProfile = ({ user }) => {
  const { currentUser } = useSelector((state) => state.users);
  const isShein = user.username === "SHEIN";
  return (
    <>
      {isShein && <SheinProfile user={user} />}
      {!isShein && currentUser!== null && user.username === currentUser.username && <SellerProfilePrivate user={user} />}
      {(!isShein && (currentUser=== null || user.username !== currentUser.username)) && <SellerProfilePublic user={user} />}
    </>
  );
};

export default SellerProfile;
