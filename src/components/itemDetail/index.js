import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { findRecentLikesThunk } from "../../services/items/items-thunks";
import { updateThunk } from "../../services/users/users-thunks";



const ItemDetail = (
    // {
    //     item = {
    //         image: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
    //         itemName: 'Shirt',
    //         price: '$15.99',
    //         condition: 'New',
    //         date: 'July 08, 2022',
    //         sellerInfo: '',
    //         itemInfo: 'abcdefg',
    //         liked: false,
    //     }
    // }
) => {
    const { currentUser } = useSelector((state) => state.users);
    const location = useLocation();
    console.log(location.state.item);
    const item = location.state.item;
    const onClickSellerInfo = () => {
        console.log('jaja');
    }
    return (
        <>
            <div className="ps-5 pe-5 pt-3">
                <div className='row d-flex align-items-start'>
                    <div className='col'>
                        <div className="wd-fill " style={{ width: "400px", height: "400px" }}>
                            <img src = {item.image} alt={'img'} />
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="text-wrap">{item.name}</h3>
                        <span style={{ fontSize: "30px", fontWeight: "300" }}>Price: ${item.price}</span><br/>
                        <span style={{ fontSize: "30px", fontWeight: "300" }}>Condition: {item.condition === "NEW" ? "New" : "Used"}</span><br/>
                        <span style={{ fontSize: "30px", fontWeight: "300" }}>Posted on: {item.date !== undefined ? item.date : "Date not available"}</span><br />
                        <a href={"/sellers/" + item.sellerName} style={{ fontSize: "30px", fontWeight: "300" }} onClick={onClickSellerInfo}>See <span style={{color: "#105cd4"}}>seller contact info</span></a><br />
                        {currentUser.role === "BUYER" && <LikeButton itemId={item.id} />}
                    </div>
        </div>
        <hr></hr>
        <div className = 'row-5'>

            <div style = {{'font-size': '40px'}}>
                Item Details:
            </div>
            <div style = {{'font-size': '25px'}}>
                {item.description}
            </div>
                </div>
                </div>
</>
    );
};

const LikeButton = ({ itemId }) => {
    const { currentUser } = useSelector((state) => state.users);
    console.log(currentUser);
    const dispatch = useDispatch();
    let liked = false;
    if (currentUser !== null && currentUser.likes.includes(itemId)) {
        liked = true;
    }
    const likeClickHandler = () => {
        // console.log(currentUser);
        if (currentUser) {
            console.log("hajs");
            const updatedBuyer = {
                username: currentUser.username,
                email: currentUser.email,
                phoneNumber: currentUser.phoneNumber,
                password: currentUser.password,
                address: currentUser.address,
                avatar: currentUser.avatar,
                role: currentUser.role,
                likes: itemId += "," + currentUser.likes,
                listings: currentUser.listings,
                reviews: currentUser.reviews,
            };
            dispatch(updateThunk(updatedBuyer)).then(() => {
                dispatch(findRecentLikesThunk(currentUser.likes));
                console.log(currentUser);
            });
            liked = true;
        }
    }
    const unlikeClickHandler = () => {
        // console.log(currentUser);
        if (currentUser) {
            console.log("hajs");
            const updatedBuyer = {
                username: currentUser.username,
                email: currentUser.email,
                phoneNumber: currentUser.phoneNumber,
                password: currentUser.password,
                address: currentUser.address,
                avatar: currentUser.avatar,
                role: currentUser.role,
                likes: currentUser.likes.replace(itemId, ''),
                listings: currentUser.listings,
                reviews: currentUser.reviews,
            };
            dispatch(updateThunk(updatedBuyer)).then(() => {
                dispatch(findRecentLikesThunk(currentUser.likes));
                console.log(currentUser);
            });
            liked = false;
        }
    }
    return (
        <>
            {!liked && <button className="btn btn-primary rounded-pill mt-4" onClick={likeClickHandler}><i className="bi bi-heart me-2 position-relative" style={{ top: "1px" }}></i>Add to liked items</button>}
            {liked && <button className="btn btn-primary rounded-pill mt-4" onClick={unlikeClickHandler}><i className="bi bi-heart-fill me-2 position-relative" style={{ top: "1px" }}></i>Remove from liked items</button>}
        </>
    );
}
export default ItemDetail;