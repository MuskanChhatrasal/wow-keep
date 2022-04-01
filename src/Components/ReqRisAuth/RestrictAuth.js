import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../Context/authContext";
import React from 'react';


export const RestrictAuth = () => {
    const { authState} = useAuth();
    const location = useLocation();
    
    console.log("userID:",authState.userID)
    return authState.userID ? (
        <Navigate to="/notes" state={{from: location}} replace />
    ) : (<Outlet />)
}