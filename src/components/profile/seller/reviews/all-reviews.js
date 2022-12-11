import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import ReviewComponent from "./review-component";

const AllReviews = () => {
  const location = useLocation();
  const profileUser = location.state.profileUser;
  const { allReviews } = useSelector((state) => state.reviews);
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate("/profile", { state: { profileUser: profileUser } });
  };
  return (
    <>
      <div className="row ms-4 me-4 mt-4">
        <div className="col-1 align-self-start" style={{ fontSize: "30px" }} onClick={onBackClick}>
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="col-11 m-0 p-0">
          <h3 className="">{profileUser.username}'s reviews</h3>
          {allReviews.map((review) => {
            return (
              <>
                <ReviewComponent review={review} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllReviews;
