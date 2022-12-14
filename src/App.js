import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import HomeComponent from "./components/home";
import Banner from "./components/banner";
import LoginComponent from "./components/login";
import RegisterComponent from "./components/register";
import Profile from "./components/profile";
import usersReducer from "./reducers/users-reducer";
import itemsReducer from "./reducers/items-reducer";
import CurrentUser from "./services/users/current-user";
import ItemDetail from "./components/itemDetail";
import reviewsReducer from "./reducers/reviews-reducer";
import Search from "./components/search";

const store = configureStore({
  reducer: {
    users: usersReducer,
    items: itemsReducer,
    reviews: reviewsReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CurrentUser>
          <Banner />
          <div className="container">
            <Routes>
              <Route path="/*" element={<HomeComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
              <Route path="/search*" element={<Search />} />
              <Route path="/item-details/:itemId" element={<ItemDetail />} />
              <Route
                path="/profile*"
                element={
                  <Profile />
                }
              />
            </Routes>
          </div>
        </CurrentUser>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
