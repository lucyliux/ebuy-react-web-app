import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { findRecentLikesThunk } from "../../../../services/items/items-thunks";
import { deleteReviewThunk, findReviewsBySellerThunk } from "../../../../services/reviews/reviews-thunk";
import { findUserByNameThunk } from "../../../../services/users/users-thunks";

const ReviewComponent = ({ review }) => {
  const { currentUser } = useSelector((state) => state.users);
  const date = new Date(review.date);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const onClickReviewer = () => {
    dispatch(findUserByNameThunk(review.buyerName)).then((response) => {
      const profileUser = response.payload;
      dispatch(findRecentLikesThunk(profileUser.likes));
      navigate(`/profile/${review.buyerName}`, { state: { profileUser: profileUser } });
    });
  };
  const onDeleteReview = () => {
    const sellerName = review.sellerName;
    dispatch(deleteReviewThunk(review._id)).then(() => dispatch(findReviewsBySellerThunk(sellerName)));
  };
  const isCurrentBuyer = currentUser !== null && currentUser.username === review.buyerName;
  const isAllReviews = location.pathname.startsWith("/profile/seller/all-reviews");
  const you = isCurrentBuyer ? " (You)" : "";
  return (
    <>
      <div className="ps-3 pe-3">
        <div className="row">
          <div className="col-1 wd-fill rounded-circle" style={{ width: "45px", height: "45px", backgroundColor: "gray" }}>
            <img src={review.buyerAvatar} alt="img" />
          </div>
          <div className="col-11">
            <div className="row">
              <span class="col-4 btn btn-sm" style={{ fontSize: "25px", color: "white", fontWeight: "bold", textAlign: "start", borderColor: "transparent" }} onClick={onClickReviewer}>
                {review.buyerName + you}
              </span>
              <span class="col" style={{ textAlign: "end" }}>
                {day + "/" + month + "/" + year}
              </span>
            </div>
            <span style={{ wordWrap: "break-word" }}>{review.content}</span>
          </div>
          {isAllReviews && isCurrentBuyer && (
            <button onClick={onDeleteReview} className="col-3 col-lg-2 btn btn-primary rounded-pill p-0 mt-2 position-relative" style={{ fontSize: "15px", width: "120px", left: "60px" }}>
              Delete review
            </button>
          )}
        </div>
      </div>
      {isAllReviews && <hr />}
    </>
  );
};

export default ReviewComponent;
