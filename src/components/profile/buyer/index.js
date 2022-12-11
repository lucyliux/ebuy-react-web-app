import { useSelector } from "react-redux"
import BuyerProfilePrivate from "./buyer-profile-private";
import BuyerProfilePublic from "./buyer-profile-public";

const BuyerProfile = ({ user }) => {
  const currentUser = useSelector((state) => state.users);
  return (
    <>
      {user.name === currentUser.name && <BuyerProfilePrivate user={ user } />}
      {user.name !== currentUser.name && <BuyerProfilePublic user={ user } />}
    </>
  )
}

export default BuyerProfile;