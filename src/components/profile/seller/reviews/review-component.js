import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { findUserByNameThunk } from "../../../../services/users/users-thunks";

const ReviewComponent = ({ review }) => {
  const date = new Date(review.date);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickReviewer = () => {
    dispatch(findUserByNameThunk(review.buyerName)).then((response) => {
      console.log(response.payload)
      navigate(`/profile/${review.buyerName}`, { state: { profileUser: response.payload } })
    }
    )
  }
  return (
    <>
      <div className="ps-3 pe-3 mb-2">
        <div className="row">
          <div className="col-1 wd-fill rounded-circle" style={{ width: "45px", height: "45px", backgroundColor: "gray" }}>
            <img src={review.buyerAvatar} alt="img" />
          </div>
          <div className="col-11">
            <div className="row">
              <span class="col btn btn-sm" style={{ fontSize: "25px", color: "white", fontWeight:"bold", textAlign:"start", borderColor: "transparent" }} onClick={onClickReviewer}>
                {review.buyerName}
              </span>
              <span class="col" style={{ textAlign: "end" }}>
                {day + "/" + month + "/" + year}
              </span>
            </div>
            <span style={{ wordWrap: "break-word", }}>{review.content}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewComponent;
