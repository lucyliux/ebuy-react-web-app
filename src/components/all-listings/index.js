import React from "react";
import ItemPreview from "../item-preview-list/item-preview"
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

const AllListings = ({ items = itemsExample, renderHeart = false, renderX = false}) => {
    let allListings = [];
    let allListingsCopy = [...allListings];
    let numPreviewLists = items.length/4;
    if (items.length % 4 !== 0) {
        numPreviewLists += 1;
    }

    for (let i = 0; i < numPreviewLists; i++) {
        let itemNum = 0;
        let allListingsCopy = [...allListings];
        allListingsCopy.push(<ItemPreviewList items={items.splice(itemNum, 4)}/>);
        itemNum += 4;
    }
    return (
        <>
            <div className="row">
                {allListingsCopy.map((listing) => {
                    let colDisplay = "col";
                    return (
                        <>
                            <div className={colDisplay}>
                                listing
                            </div>
                        </>
                    )
                })}
            </div>

        </>
    )
}

export default AllListings;