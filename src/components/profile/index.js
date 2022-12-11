import { Routes, Route, useLocation } from "react-router";
import BuyerProfile from "./buyer/buyer-profile-private";
import SellerProfile from "./seller/seller-profile";
import EditProfileComponent from "./edit-profile";
import { useDispatch, useSelector } from "react-redux";
import CreateListingComponent from "./seller/create-listing";
import AllListings from "../all-listings";
import AddReview from "./seller/reviews/add-review";
import AllReviews from "./seller/reviews/all-reviews";
import { findUserByName } from "../../services/users/users-service";
import { findUserByNameThunk } from "../../services/users/users-thunks";
import SellerProfilePublic from "./seller/seller-profile/seller-profile-public";
import ProtectedRoute from "../../services/users/protected-route";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.users);
  const location = useLocation();
  console.log(location.state.profileUser);
  const profileUser = location.state.profileUser;
  const dispatch = useDispatch();
  dispatch(findUserByNameThunk("seller3"));
  const isBuyer = profileUser.role === "BUYER";
  return (
    <div>
      <Routes>
        
        {/* <Route path="/:username" element={<SellerProfilePublic user={profileUser} />} /> */}
        <Route path="/edit-profile" element={<EditProfileComponent />} />
        <Route path="/seller/create-listing" element={<CreateListingComponent />} />
        <Route path="/seller/all-listings" element={<AllListings />} />
        <Route path="/*" element={isBuyer ? <BuyerProfile user={profileUser} /> : <SellerProfile user={profileUser} />} />

        <Route
          path="/seller/add-review"
          element={
            <ProtectedRoute>
              <AddReview />
            </ProtectedRoute>
          }
        />

        <Route path="/seller/all-reviews" element={<AllReviews />} />
        <Route path="/buyer/all-likes" element={<AllListings />} />
      </Routes>
    </div>
  );
};

export default Profile;
