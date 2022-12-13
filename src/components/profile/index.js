import { Routes, Route, useLocation } from "react-router";
import SellerProfile from "./seller/seller-profile";
import EditProfileComponent from "./edit-profile";
import CreateListingComponent from "./seller/create-listing";
import AllListings from "../all-listings";
import AddReview from "./seller/reviews/add-review";
import AllReviews from "./seller/reviews/all-reviews";
import ProtectedRoute from "../../services/users/protected-route";
import BuyerProfile from "./buyer";

const Profile = () => {
  const location = useLocation();
  const profileUser = location.state.profileUser;
  const isBuyer = profileUser.role === "BUYER";
  return (
    <div>
      <Routes>
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
