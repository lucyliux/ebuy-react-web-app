import { useSelector } from "react-redux"
import { useLocation } from "react-router";
import SellerProfilePrivate from "./seller-profile-private";
import SellerProfilePublic from "./seller-profile-public";

const SellerProfile = ({ user }) => {
  const {currentUser} = useSelector((state) => state.users);
  console.log(user.username);
  console.log(currentUser.username)
  return (
    <>
      {user.username === currentUser.username && <SellerProfilePrivate user={ user } />}
      {user.username !== currentUser.username && <SellerProfilePublic user={ user } />}
    </>
  )
}

export default SellerProfile;