import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../../Context/authContext";

const RequireAuth = () => {
    const { authState} = useAuth();
    const location = useLocation();
    return authState.userID ? (
		<Outlet />
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
}

export default RequireAuth