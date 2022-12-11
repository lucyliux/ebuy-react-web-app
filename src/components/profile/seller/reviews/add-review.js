import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { createReviewThunk, findReviewsBySellerThunk } from "../../../../services/reviews/reviews-thunk";
import { updateThunk } from "../../../../services/users/users-thunks";

const AddReview = () => {
  const location = useLocation();
  const seller = location.state.profileUser;
  const { currentUser } = useSelector((state) => state.users);
  const { allReviews } = useSelector((state) => state.reviews);
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCancel = () => {
    navigate("/profile", {state: {profileUser: seller}});
  }
  const createReviewClickHandler = () => {
    if (review === "") {
      alert("Please write something");
    }
    else {
      const newReview = {
        sellerName: seller.username,
        buyerName: currentUser.username,
        date: new Date(),
        content: review,
      };
      dispatch(createReviewThunk(newReview)).then((response) => {
        const updatedSeller = { 
          username: seller.username,
          email: seller.email,
          phoneNumber: seller.phoneNumber,
          password: seller.password,
          address: seller.address,
          avatar: seller.avatar,
          role: seller.role,
          likes: seller.likes,
          listings: seller.listings,
          reviews: seller.reviews,
         };
        updatedSeller.reviews = response.payload._id + "," + updatedSeller.reviews;
        dispatch(updateThunk(updatedSeller)).then(() => {
          dispatch(findReviewsBySellerThunk(updatedSeller.username)).then(() => {
            navigate("/profile", { state: { profileUser: updatedSeller } })
          })
        });
      });
    }
  }
  return (
    <>
      <div style={{width: "40%", marginLeft: "auto", marginRight: "auto"}}>
        <h2 className="mt-5 mb-4" style={{ textAlign: "center" }}><b>Create a review for {seller.username}</b></h2>
        <textarea selected style={{width: "100%", height: "200px"}} className="rounded ps-2 wd-white-on-bg-color-dark-gray mb-3" placeholder="Description" onChange={(event) => setReview(event.target.value)} /><br/>
        <div className="row m-0">
          <button className="col btn btn-primary rounded-pill me-1" style={{ backgroundColor: "#105cd4", borderColor: "transparent" }} onClick={createReviewClickHandler}><b>Create review</b></button>
          <button className="col btn btn-secondary override-bs rounded-pill ms-1" onClick={onCancel}><b>Cancel</b></button>
        </div>
      </div>
    </>
  )
}

export default AddReview;