import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { findAllLikesThunk } from "../../../services/items/items-thunks";
import ItemPreviewList from "../../item-preview-list";

const BuyerProfilePrivate = ({ user }) => {
  return (
    <>
      <div className="ps-5 pe-5">
        <div class="row">
          <div href="profile" className="col-1 wd-fill rounded-circle position-relative" style={{ width: "100px", height: "100px", backgroundColor: "gray" }}>
            <img src={user.avatar} alt="img" />
          </div>
          <span className="col" style={{ fontSize: "50px" }}>
            {user.username}
          </span>
          <div className="col-6">
            <RoleTag role={user.role} />
          </div>
          <div className="col">
            <EditProfileButton user={user} />
          </div>
        </div>
        <UserInfo user={user} />
        <hr />
        <LikedItems user={user} />
      </div>
    </>
  );
};

const RoleTag = () => {
  return (
    <>
      <div className="rounded">
        <span className="rounded border border-success text-success p-1 ps-3 pe-3">Buyer</span>
      </div>
    </>
  );
};

const EditProfileButton = ({ user }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/profile/edit-profile", { state: { profileUser: user } });
  };
  return (
    <>
      <button className="col btn btn-primary rounded-pill float-end" onClick={onClick}>
        Edit profile
      </button>
    </>
  );
};

const UserInfo = ({ user }) => {
  return (
    <>
      <div className="mt-3">
        <h4>Email: {user.email}</h4>
        <h4>Cell: {user.phoneNumber}</h4>
        <h4>Address: {user.address}</h4>
      </div>
    </>
  );
};

const LikedItems = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recentLikes, loading } = useSelector((state) => state.items);
  const handleSeeAllClick = () => {
    dispatch(findAllLikesThunk(user.likes));
    navigate("/profile/buyer/all-likes", { state: { profileUser: user } });
  };
  return (
    <>
      <div>
        <div className="row">
          <b className="col wd-text-align-left">Liked items</b>
          <b className="col wd-text-align-right" onClick={handleSeeAllClick}>
            See all
          </b>
        </div>
        {loading && <span>Loading...</span>}
        {recentLikes.length === 0 && !loading && <span>You don't have any liked items</span>}
        {!loading && <ItemPreviewList items={recentLikes} />}
      </div>
    </>
  );
};

export default BuyerProfilePrivate;
