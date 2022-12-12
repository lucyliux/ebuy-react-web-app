import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import { findAllLikesThunk } from "../../../services/items/items-thunks";
import ItemPreviewList from "../../item-preview-list";

const BuyerProfilePublic = ({user}) => {
  return (
    <>
      <div className="ps-5 pe-5">
        <div class="row mb-5">
          <div href="profile" className="col-1 wd-fill rounded-circle position-relative" style={{ width: "100px", height: "100px", backgroundColor: "gray"}}>
            <img  src={user.avatar} alt="img"/>
          </div>
          <span className="col" style={{fontSize: "50px"}}>{user.username}</span>
          <div className="col-5 col-lg-7 col-xl-9"><RoleTag role={user.role} /></div>
        </div>
        <hr/>
        <LikedItems user={user} />
      </div>
    </>
  )
}

const RoleTag = () => {
    return (
        <>
            <div className="rounded">
                <span className="rounded border border-success text-success p-1 ps-3 pe-3">Buyer</span>
            </div>
        </>
    )
}

const LikedItems = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recentLikes } = useSelector((state) => state.items);
  const handleSeeAllClick = () => {
    dispatch(findAllLikesThunk(user.likes));
    navigate("/profile/buyer/all-likes")
  }
  return (
      <>
          <div>
              <div className="row">
                  <b className="col wd-text-align-left">Liked items</b>
                  <b className="col wd-text-align-right" onClick={handleSeeAllClick}>See all</b>
              </div>
              <ItemPreviewList items={recentLikes}/>
          </div>
      </>
  )
}

export default BuyerProfilePublic;