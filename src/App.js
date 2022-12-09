import './App.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import HomeComponent from "./components/home";
import Banner from "./components/banner"
import LoginComponent from './components/login'
import RegisterComponent from './components/register'
import Profile from './components/profile';
import trendingItemsReducer from './reducers/trending-items-reducer';
import usersReducer from './reducers/users-reducer';
import itemsReducer from './reducers/items-reducer';
import CurrentUser from "./services/users/current-user";
import ProtectedRoute from './services/users/protected-route';

const store = configureStore({
  reducer: {
    trendingItems: trendingItemsReducer,
    users: usersReducer,
    items: itemsReducer,
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
             
              <Route path="/profile*" element={
                 <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
          </Routes>
          </div>
          </CurrentUser>
      </BrowserRouter>
      </Provider>
  );
}

export default App;