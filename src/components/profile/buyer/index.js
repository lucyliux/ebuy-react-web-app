import { useSelector } from "react-redux"
import BuyerProfilePrivate from "./buyer-profile-private";
import BuyerProfilePublic from "./buyer-profile-public";

const BuyerProfile = ({ user }) => {
  const currentUser = useSelector((state) => state.users);
  return (
    <>
      {user.username === currentUser.username && <BuyerProfilePrivate user={ user } />}
      {user.username !== currentUser.username && <BuyerProfilePublic user={ user } />}
    </>
  )
}

export default BuyerProfile;