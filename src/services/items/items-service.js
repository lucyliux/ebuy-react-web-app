import axios from 'axios';
const BASE_URL = "http://localhost:4000/api";
const ITEMS_API = `${BASE_URL}/items`;

const api = axios.create({
   withCredentials: true
});

export const createItem = async (item) => {
  const response = await api.post(`${ITEMS_API}/create`, item);
  return response.data;
}

export const findRecentLikes = async (itemIds) => {
  console.log(itemIds);
  const response = await api.post(`${ITEMS_API}/findRecentItems`, {itemIds: itemIds});
  return response.data;
}

export const findRecentListings = async (itemIds) => {
  console.log(itemIds);
  const response = await api.post(`${ITEMS_API}/findRecentItems`, {itemIds: itemIds});
  return response.data;
}

/////////////////////////////// eBay API /////////////////////////////////
// const EBAY_BROWSE_API = "https://api.ebay.com/buy/browse/v1/item_summary/search?q=drone&limit=3";
// export const findRemoteItemsByKeyword = async (keyword) => {
//   const response = await axios.get(EBAY_BROWSE_API);
//   console.log("Ebau");
//   console.log(response);
//   return response.data;
// }

export const findRemoteItemsByKeyword = async (keyword) => {
  const options = {
    method: 'GET',
    url: 'https://unofficial-shein.p.rapidapi.com/products/search',
    params: {
      keywords: keyword,
      language: 'en',
      country: 'US',
      currency: 'USD',
      sort: '7',
      limit: '20',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': 'b93a0037cbmsh6334c9022053620p1d848cjsndc98ae9825cf',
      'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
    }
  };
  const response = await axios.request(options);
  console.log(response.data.info.products)
  return response.data.info.products;
}

// export const getRemoteItemDetails = async (itemId) => {
//   const options = {
//     method: 'GET',
//     url: 'https://unofficial-shein.p.rapidapi.com/products/detail',
//     params: {goods_id: itemId, language: 'en', country: 'US', currency: 'USD'},
//     headers: {
//       'X-RapidAPI-Key': 'b93a0037cbmsh6334c9022053620p1d848cjsndc98ae9825cf',
//       'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
//     }
//   };
//   const response = await axios.request(options);
//   console.log(response.data.info.products)
//   return response.data.info.products;
// }