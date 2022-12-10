import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { findRecentListingsThunk } from "../../../services/items/items-thunks";
import ItemPreviewList from "../../item-preview-list";

const SellerProfile = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <>
      <div className="ps-5 pe-5">
        <div class="row">
          <div href="profile" className="col-1 wd-fill rounded-circle position-relative" style={{ width: "100px", height: "100px", backgroundColor: "gray"}}>
            <img  src={currentUser.avatar} alt="img"/>
          </div>
          <span className="col" style={{fontSize: "50px"}}>{currentUser.username}</span>
          <div className="col-6"><RoleTag role={currentUser.role} /></div>
          <div className="col"><EditProfileButton /></div>
        </div>
        <UserInfo user={currentUser} />
        <hr/>
        <Listings user={currentUser} />
      </div>
    </>
  )
}

const RoleTag = () => {
  return (
    <>
      <div className="rounded">
        <span className="rounded border border-warning text-warning p-1 ps-3 pe-3">Seller</span>
      </div>
    </>
  )
}

const EditProfileButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/profile/edit-profile');
  }
  return (
    <>
      <button className="col btn btn-primary rounded-pill float-end" onClick={onClick}>
        Edit profile
      </button>
    </>
  )
}

const UserInfo = ({ user }) => {
  return (
    <>
      <div className="mt-3">
        <h4>Email: {user.email}</h4>
        <h4>Cell: {user.phoneNumber}</h4>
        <h4>Address: {user.address}</h4>
        </div>
    </>
  )
}

const Listings = ({ user }) => {
  const {recentListings} = useSelector((state) => state.items);
  const navigate = useNavigate();
  const handleNewListingClick = () => {
    navigate("/profile/seller/create-listing")
  }
  return (
    <>
      <div>
        <div className="row">
          <b className="col-1 wd-text-align-left">Listings</b>
          <button className="col-2 btn btn-primary rounded p-0" style={{height: "25px", width: "160px", fontSize: "15px"}} onClick={handleNewListingClick}>+ Create new listing</button>
          <b className="col wd-text-align-right">See all</b>
        </div>
        <div className="mt-1"><ItemPreviewList items={recentListings} /></div>
      </div>
    </>
)
}

export default SellerProfile;