import { useState,useEffect } from 'react'
import {Route, Routes } from 'react-router-dom'

import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminFeatures from './pages/admin/Features';
import AdminOrders from './pages/admin/Orders';
import AdminProducts from './pages/admin/Products';
import Layout from './components/user/Layout';
import NotFound from './pages/not-found/NotFound';
import Home from './pages/user/Home';
import Cart from './pages/user/Listing';
import Checkout from './pages/user/Checkout';
import CheckAuth from './components/Check-auth';
import UnAuth from './pages/un-authpage/UnAuth'
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './store/authSlice';
import ListingProducts from './pages/user/Listing';


function App() {
 const {isAuthenticated, user} = useSelector(state => state.auth);
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(checkAuth())
 },[dispatch])

 

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/login"
          element={
            <CheckAuth user={user} isAuthenticated={isAuthenticated}>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <CheckAuth  user={user} isAuthenticated={isAuthenticated}>
              <Signup />
            </CheckAuth>
          }
        />

        <Route
          path="/admin"
          element={
            <CheckAuth  user={user} isAuthenticated={isAuthenticated}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        <Route
          path="/"
          element={
            <CheckAuth  user={user} isAuthenticated={isAuthenticated}>
              <Layout />
            </CheckAuth>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="list" element={<ListingProducts/>} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path='/unauth' element = {<UnAuth/>} />
      </Routes>
    </div>
  );
}

export default App
