import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { getSessionAllThunk } from "../../services/sessions/sessions-thunks";
import { logoutThunk, profileThunk } from "../../services/users/users-thunks";
import { findRecentLikesThunk, findRecentListingsThunk } from "../../services/items/items-thunks";
import { findReviewsBySellerThunk } from "../../services/reviews/reviews-thunk";

const Banner = () => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="pt-2" style={{ marginBottom: "-50px" }}>
        <h1 className="mb-0" style={{ textAlign: "center" }}>
          eBuy
        </h1>
        {(currentUser === null || currentUser === undefined) && (
          <div className="row m-0 me-5 pt-3 float-right justify-content-end position-relative" style={{ bottom: "65px" }}>
            <i onClick={onHomeClick} className="btn bi bi-house-fill m-0 p-0 position-relative me-3" style={{ color: "white", fontSize: "40px", width: "40px", height: "40px", bottom: "10px", borderColor:"transparent" }}></i>
            <LoginRegisterButton name="Login" path="login" />
            <LoginRegisterButton name="Register" path="register" />
          </div>
        )}
        {currentUser !== null && (
          <div className="row m-0 me-5 pt-3 float-right justify-content-end position-relative" style={{ bottom: "65px" }}>
            <i onClick={onHomeClick} className="btn bi bi-house-fill m-0 p-0 position-relative me-3" style={{ color: "white", fontSize: "40px", width: "40px", height: "40px", bottom: "10px", borderColor:"transparent" }}></i>
            <Profile user={currentUser} />
            <LogoutButton />
          </div>
        )}
      </div>
      <hr className="mt-1" style={{ borderWidth: "2px" }}></hr>
    </>
  );
};

const LoginRegisterButton = ({ name, path }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(path);
  };
  return (
    <>
      <button className="col-1 btn btn-primary rounded-pill me-3 align-items-right" style={{ fontSize: "15px", paddingTop: "4px", paddingBottom: "4px" }} onClick={routeChange}>
        {name}
      </button>
    </>
  );
};

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutClickHandler = () => {
    dispatch(logoutThunk());
    navigate("/");
  };
  return (
    <>
      <button className="col-1 btn btn-primary rounded-pill me-3 align-items-right" style={{ fontSize: "15px", paddingTop: "4px", paddingBottom: "4px" }} onClick={logoutClickHandler}>
        Logout
      </button>
    </>
  );
};

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onProfileClick = () => {
    // user.role === "SELLER" ? dispatch(findRecentListingsThunk(user.listings)) :
    dispatch(findRecentLikesThunk(user.likes));
    dispatch(findRecentListingsThunk(user.listings));
    dispatch(findReviewsBySellerThunk(user.username));
    navigate("/profile", { state: { profileUser: user } });
  };
  return (
    <>
      <i onClick={onProfileClick} className="btn bi bi-person-circle m-0 p-0 position-relative me-3" style={{ color: "white", fontSize: "40px", width: "40px", height: "40px", bottom: "10px", borderColor:"transparent" }}></i>
    </>
  );
};

export default Banner;
