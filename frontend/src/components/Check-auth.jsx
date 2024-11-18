import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function CheckAuth({isAuthenticated, user, children}) {
  
    const location = useLocation()

    if (!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/signup"))) {
        return <Navigate to={"/login"} />
    }

    if (isAuthenticated && (location.pathname.includes("/login") || location.pathname.includes("/signup"))) {
        if (user?.role === "admin") {
            return <Navigate to={"/admin/dashboard"} />
        }else {
            return <Navigate to={"/"} />
        }
    }

    if (isAuthenticated && user.role !== "admin" && location.pathname.includes("admin")) {
        return <Navigate to={"/unauth"} />
    }

    if (user && user?.role === "admin" && location.pathname.includes("shop")) {
        return <Navigate to={"/admin/dashboard"} />
    }

    return <> {children} </>
}

export default CheckAuth