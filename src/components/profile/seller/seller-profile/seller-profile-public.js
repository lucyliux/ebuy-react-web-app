import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { findAllListingsThunk } from "../../../../services/items/items-thunks";
import ItemPreviewList from "../../../item-preview-list";
import ReviewComponent from "../reviews/review-component";

const SellerProfilePublic = ({ user }) => {
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
              <div className="col-6">
                <RoleTag role={user.role} />
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

const UserInfo = ({ user }) => {
  return (
    <>
      <div className="mt-3">
        <h4>Email: {user.email}</h4>
        <h4>Cell: {user.phoneNumber}</h4>
      </div>
    </>
  );
};

const Listings = ({ user }) => {
  const { recentListings, loading } = useSelector((state) => state.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSeeAllClick = () => {
    dispatch(findAllListingsThunk(user.listings));
    navigate("/profile/seller/all-listings", { state: { profileUser: user } });
  };
  return (
    <>
      <div>
        <div className="row mb-2">
          <b className="col-1 wd-text-align-left">Listings</b>
          <b className="col wd-text-align-right" onClick={handleSeeAllClick}>
            See all
          </b>
        </div>
        {loading&&<span>Loading...</span>}
        {!loading && <ItemPreviewList items={recentListings} />}
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
      {allReviews.length === 0 && <span>{user.username} doesn't have any review.</span>}
      {allReviews.length > 0 &&
        previews.splice(0, 2).map((review) => {
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

export default SellerProfilePublic;
