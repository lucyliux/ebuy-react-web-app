import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { findAllListingsThunk } from "../../../../services/items/items-thunks";
import ItemPreviewList from "../../../item-preview-list";
import ReviewComponent from "../reviews/review-component";

const SellerProfilePrivate = ({ user }) => {
  return (
    <>
      <div className="ps-5 pe-5">
        <div className="row">
          <div className="col">
            <div class="row">
              <div className="col-1 wd-fill rounded-circle position-relative" style={{ width: "100px", height: "100px", backgroundColor: "gray" }}>
                <img src={user.avatar} alt="img" />
              </div>
              <span className="col" style={{ fontSize: "50px" }}>
                {user.username}
              </span>
              <div className="col">
                <RoleTag role={user.role} />
              </div>
              <div className="col">
                <EditProfileButton user={user} />
              </div>
            </div>
            <UserInfo user={user} />
          </div>
          <div className="col" style={{ width: "300px" }}>
            <Reviews user={user} />
          </div>
        </div>
        <hr />
        <Listings user={user} />
      </div>
    </>
  );
};

const RoleTag = () => {
  return (
    <>
      <div className="rounded">
        <span className="rounded border border-warning text-warning p-1 ps-3 pe-3">Seller</span>
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

const Listings = ({ user }) => {
  const { recentListings } = useSelector((state) => state.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNewListingClick = () => {
    navigate("/profile/seller/create-listing");
  };
  const handleSeeAllClick = () => {
    dispatch(findAllListingsThunk(user.listings));
    navigate("/profile/seller/all-listings", { state: { profileUser: user } });
  };
  return (
    <>
      <div>
        <div className="row mb-2">
          <b className="col-1 wd-text-align-left">Listings</b>
          <button className="col-2 btn btn-primary rounded p-0" style={{ height: "25px", width: "160px", fontSize: "15px" }} onClick={handleNewListingClick}>
            + Create new listing
          </button>
          <b className="col wd-text-align-right" onClick={handleSeeAllClick}>
            See all
          </b>
        </div>
        <ItemPreviewList items={recentListings} />
      </div>
    </>
  );
};

const Reviews = ({ user }) => {
  const navigate = useNavigate();
  const { allReviews } = useSelector((state) => state.reviews);
  const previews = [...allReviews];

  const onAddReviewClick = () => {
    navigate("/profile/seller/add-review", { state: { profileUser: user } });
  };
  const onAllReviewsClick = () => {
    navigate("/profile/seller/all-reviews", { state: { profileUser: user } });
  };
  return (
    <>
      <div className="row">
        <h3 className="col">Reviews</h3>
        <button onClick={onAddReviewClick} className="col-4 btn btn-primary rounded-pill p-0">
          + Add a review
        </button>
      </div>
      {previews.splice(0, 2).map((review) => {
        return (
          <>
            <ReviewComponent review={review} />
          </>
        );
      })}
      <br />
      <b onClick={onAllReviewsClick}>See all reviews</b>
    </>
  );
};

export default SellerProfilePrivate;
