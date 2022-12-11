import React from "react";
import ItemPreview from "../item-preview-list/item-preview"
import {useSelector} from "react-redux";
import { all } from "axios";
import { useLocation } from "react-router";
import ItemPreviewList from "../item-preview-list";

const itemsExample = [
    {
        _id: "123",
        name: "bag",
        date: "2006-01-02T15:04:05.000Z",
        price: 12.99,
        image: "https://maptote.com/resizeIt.php?width=249&image=/images/products/3/Boston-Grocery-WEB.jpg",
        description: "yay",
        sellerId: "1"
    }
]

const AllListings = () => {
    // const { currentUser } = useSelector((state) => state.users);
    const { allListings, allLikes } = useSelector((state) => state.items);
    const { currentUser } = useSelector((state) => state.users);
    const location = useLocation();
    const profileUser = location.state.profileUser;
    // const isBuyer = profileUser.role === "BUYER";
    let allItems = [];
    let headerText = "";
    if (profileUser.role === "BUYER") {
        allItems = allLikes;
        headerText = "All Likes";
    }
    else {
        allItems = allListings;
        headerText = "All Listings";
    }
    return (
        <>
            <h4>{headerText}</h4>
            <ItemPreviewList items={allItems} />
        </>
    )
}

export default AllListings;