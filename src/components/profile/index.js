import { Routes, Route } from "react-router";
import ProfileComponent from "./profile-component";
import EditProfileComponent from "./edit-profile";

const Profile = () => {
  return (
    <div>
      <Routes>
        <Route index element={<ProfileComponent />} />
        <Route path="/edit-profile" element={<EditProfileComponent />} />
      </Routes>
    </div>
  );
}

export default Profile;