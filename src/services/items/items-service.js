import axios from "axios";
import { API_BASE } from "../api";
const ITEMS_API = `${API_BASE}/items`;

const api = axios.create({
  withCredentials: true,
});

export const createItem = async (item) => {
  const response = await api.post(`${ITEMS_API}/create`, item);
  return response.data;
};

export const deleteItem = async (itemId) => await api.delete(`${ITEMS_API}/${itemId}`);

export const findRecentRemoteLikes = async (itemIds) => {
  const ids = itemIds;
  const split = ids
    .split(",")
    .filter((str) => str !== "")
    .splice(0, 4);
  let remoteItems = [];
  const promises = split.map(async (id) => await getRemoteItemById(id));
  await Promise.all(promises).then((ps) => {
    ps.forEach((p) => remoteItems.push(p));
  });
  return remoteItems;
};

export const findRecentMongoLikes = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findRecentItems`, { itemIds: itemIds });
  return response.data;
};

export const findRecentListings = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findRecentItems`, { itemIds: itemIds });
  return response.data;
};

export const findAllListings = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findAllItems`, { itemIds: itemIds });
  return response.data;
};

export const findAllRemoteLikes = async (itemIds) => {
  const ids = itemIds;
  const split = ids.split(",").filter((str) => str !== "");
  let remoteItems = [];
  const promises = split.map(async (id) => await getRemoteItemById(id));
  await Promise.all(promises).then((result) => {
    remoteItems = result.filter((item) => item.name !== undefined);
  });
  return remoteItems;
};

export const findAllMongoLikes = async (itemIds) => {
  const response = await api.post(`${ITEMS_API}/findAllItems`, { itemIds: itemIds });
  return response.data;
};

export const findMongoItemsByKeyword = async ({ keyword, num }) => {
  const response = await api.post(`${ITEMS_API}/findItemsByKeyword`, { keyword: keyword, limit: num });
  return response.data;
};

export const findRemoteItemsByKeyword = async ({ keyword, num }) => {
  const options = {
    method: "GET",
    url: "https://unofficial-shein.p.rapidapi.com/products/search",
    params: {
      keywords: keyword,
      language: "en",
      country: "US",
      currency: "USD",
      sort: "7",
      limit: num.toString(),
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "b93a0037cbmsh6334c9022053620p1d848cjsndc98ae9825cf",
      "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  const searchResult = response.data.info.products;
  const items = [];
  searchResult.forEach((result) => {
    items.push({
      _id: result.goods_id,
      name: result.goods_name,
      condition: "NEW",
      price: Number(result.salePrice.amount),
      image: result.goods_img,
      description: result.goods_name,
      sellerName: "SHEIN",
    });
  });
  return items;
};

export const getRecentRemoteItems = async () => {
  const options = {
    method: "GET",
    url: "https://unofficial-shein.p.rapidapi.com/products/list",
    params: {
      cat_id: "1980",
      adp: "10170797",
      language: "en",
      country: "US",
      currency: "USD",
      sort: "9",
      limit: "4",
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "b93a0037cbmsh6334c9022053620p1d848cjsndc98ae9825cf",
      "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
    },
  };

  const response = await axios.request(options).catch((err) => {
    return {};
  });

  const items = response.data.info.products;
  const result = [];
  if (items) {
    items.forEach((item) => {
      const ourItem = {
        _id: item.goods_id,
        name: item.goods_name,
        condition: "NEW",
        price: Number(item.salePrice.amount),
        image: item.goods_img,
        description: item.goods_name,
        sellerName: "SHEIN",
      };
      result.push(ourItem);
    });
    return result;
  } else {
    return {};
  }
};

export const getAllRemoteItems = async (num) => {
  const options = {
    method: "GET",
    url: "https://unofficial-shein.p.rapidapi.com/products/list",
    params: {
      cat_id: "1980",
      adp: "10170797",
      language: "en",
      country: "US",
      currency: "USD",
      sort: "9",
      limit: num.toString(),
      page: "1",
    },
    headers: {
      "X-RapidAPI-Key": "b93a0037cbmsh6334c9022053620p1d848cjsndc98ae9825cf",
      "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
    },
  };

  const response = await axios.request(options).catch((err) => {
    return {};
  });

  const items = response.data.info.products;
  const result = [];
  if (items) {
    items.forEach((item) => {
      const ourItem = {
        _id: item.goods_id,
        name: item.goods_name,
        condition: "NEW",
        price: Number(item.salePrice.amount),
        image: item.goods_img,
        description: item.goods_name,
        sellerName: "SHEIN",
      };
      result.push(ourItem);
    });
    return result;
  } else {
    return {};
  }
};

export const getRemoteItemById = async (itemId) => {
  const options = {
    method: "GET",
    url: "https://unofficial-shein.p.rapidapi.com/products/detail",
    params: { goods_id: itemId, language: "en", country: "US", currency: "USD" },
    headers: {
      "X-RapidAPI-Key": "b93a0037cbmsh6334c9022053620p1d848cjsndc98ae9825cf",
      "X-RapidAPI-Host": "unofficial-shein.p.rapidapi.com",
    },
  };
  const response = await axios.request(options).catch((err) => {
    return {};
  });

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
    };
    return ourItem;
  } else {
    return {};
  }
};

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const headers = new Headers();
  headers.append("Authorization", "Client-ID 432ea0ec3154fb2");
  const options = {
    method: "POST",
    headers: headers,
    body: formData,
    redirect: "follow",
  };
  const data = await fetch("https://api.imgur.com/3/image", options);

  const json = await data.json();
  return json.data.link;
};
