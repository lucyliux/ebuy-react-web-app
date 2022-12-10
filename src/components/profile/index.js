import {Routes, Route} from "react-router";
import BuyerProfile from "./buyer/buyer-profile";
import SellerProfile from "./seller/seller-profile";
import EditProfileComponent from "./edit-profile";
import {useSelector} from "react-redux";
import CreateListingComponent from "./seller/create-listing";
import AllListings from "../all-listings";

const Profile = () => {
    const {currentUser} = useSelector((state) => state.users);
    const isBuyer = currentUser.role === "BUYER";
    return (
        <div>
            <Routes>
                <Route path="/" element={isBuyer ? <BuyerProfile/> : <SellerProfile/>}/>
                <Route path="/edit-profile" element={<EditProfileComponent/>}/>
                <Route path="/seller/create-listing" element={<CreateListingComponent/>}/>
                <Route path="/seller/all-listings" element={<AllListings/>}/>
                <Route path="/buyer/all-likes" element={<AllListings/>}/>

            </Routes>
        </div>
    );
}

export default Profile;