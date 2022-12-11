import axios from 'axios';
import { API_BASE } from "../api";
const ITEMS_API = `${API_BASE}/items`;

// const config = {
//   headers: {
//    'Access-Control-Allow-Origin' : '*',
//    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//    }
// }

const headers ={
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }

const api = axios.create({
   withCredentials: true
});

export const createItem = async (item) => {
  const response = await api.post(`${ITEMS_API}/create`, item);
  return response.data;
}

export const findRecentRemoteLikes = async (itemIds) => {
  const ids = itemIds;
  const split = ids.split(",").filter((str) => str !== "").splice(0, 4);
  let remoteItems = [];
  const promises = split.map(async (id) => await getRemoteItemById(id));
  await Promise.all(promises).then(ps => { ps.forEach(p => remoteItems.push(p)) });
  return remoteItems;
}

export const findRecentMongoLikes = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findRecentItems`, {headers: headers, itemIds: itemIds});
  return response.data;
}

export const findRecentListings = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findRecentItems`, {itemIds: itemIds});
  return response.data;
}

export const findAllListings = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findAllItems`, {itemIds: itemIds});
  return response.data;
}

export const findAllRemoteLikes = async (itemIds) => {
  const ids = itemIds;
  const split = ids.split(",").filter((str) => str !== "");
  let remoteItems = [];
  const promises = split.map(async (id) => await getRemoteItemById(id));
  await Promise.all(promises).then(ps => { ps.forEach(p => remoteItems.push(p)) });
  return remoteItems;
}

export const findAllMongoLikes = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findAllItems`, {itemIds: itemIds});
  return response.data;
}

export const findMongoItemsByKeyword = async (keyword) => {
  const response = await api.post(`${ITEMS_API}/findItemsByKeyword`, {keyword: keyword});
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
  const searchResult = response.data.info.products;
  const items = [];
  searchResult.forEach(result => {
    items.push(
      {
        _id: result.goods_id,
        name: result.goods_name,
        // date: Date,
        condition: "NEW",
        price: Number(result.salePrice.amount),
        image: result.goods_img,
        description: result.goods_name,
        sellerName: "SHEIN",
      }
    );
  });
  return items;
}

export const getRemoteItemById = async (itemId) => {
  const options = {
    method: 'GET',
    url: 'https://unofficial-shein.p.rapidapi.com/products/detail',
    params: {goods_id: itemId, language: 'en', country: 'US', currency: 'USD'},
    headers: {
      'X-RapidAPI-Key': 'b93a0037cbmsh6334c9022053620p1d848cjsndc98ae9825cf',
      'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
    }
  };
  const response = await axios.request(options);

  const item = response.data.info;
  if (item) {
    const ourItem = {
      _id: item.goods_id,
      name: item.goods_name,
      condition: "NEW",
      price: Number(item.sale_price.amount),
      image: item.goods_img,
      description: item.goods_name,
      sellerName: "SHEIN",
    }
    return ourItem;
  } else {
    return {};
  }
}

