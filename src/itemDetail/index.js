import React from "react";



const itemDetail = (
    {
        item = {
            image: 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg',
            itemName: 'Shirt',
            price: '$15.99',
            condition: 'New',
            date: 'July 08, 2022',
            sellerInfo: '',
            itemInfo: 'abcdefg',
            liked: false,
        }
    }
) => {
    return (
<>
        <div className='row col-12 align-items-middle'>
            <div className='col-3'>
                <img
                    width={500}
                    height={500}
                    className = 'float-end ps-0 pe-0 pt-0 pb-0 h-100'
                    src = {`${item.image}`}
                    alt = {'img'}
                    />
            </div>
            <ul className='col-9'>
                <div style = {{'font-size': '50px'}}>
                    {item.itemName}
                </div>
                <div style = {{'font-size': '30px'}}>
                    Price: {item.price}
                </div>
                <div style = {{'font-size': '30px'}}>
                    Condition: {item.condition}
                </div>
                <div style = {{'font-size': '30px'}}>
                    Posted On: {item.date}
                </div>
                <div style = {{'font-size': '30px'}}>
                    <a href="/contactinfo.json">Seller Contact Info</a>
                </div>
            </ul>
        </div>
        <hr></hr>
        <div className = 'row-5'>

            <div style = {{'font-size': '40px'}}>
                Item Details:
            </div>
            <div style = {{'font-size': '25px'}}>
                {item.itemInfo}
            </div>
        </div>
</>
    );
};
export default itemDetail;