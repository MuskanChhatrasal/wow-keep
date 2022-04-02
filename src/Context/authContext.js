import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import {authReducer} from './authReducer'

const initialAuthData = {
    toastData:{
        display: false,
        data: "",
        status:""
    },
    signedIn: false,
    userName: "",
    userEmail: "",
    userID: "",
    notes: [],
    archivedNotes: [],
    trashNotes: []
}

// const authReducer = (state, { type, payload }) => {
// 	switch (type) {
// 		case "LOGIN_SUCCESS":
// 			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "success" }, signedIn: true, userName: payload.name, userEmail: payload.email, userID: payload.userID }
// 		case "LOGIN_ERROR":
// 			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" } }

// 		case "HANDLER_ERROR":
// 			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" } }

// 		case "REMOVE_TOAST":
// 			return { ...state, toastData: { ...state.toastData, display: false } }

// 		case "LOGOUT":
// 			return { ...state, toastData: { display: true, data: payload.toastMessage, status: "alert" }, signedIn: false, userName: payload.name, userEmail: payload.email, userID: payload.userID }
// 		default:
// 			return { ...state }
// 	}
// }

const AuthContext = createContext(initialAuthData );

const AuthProvider = ({children}) =>{

    const [authState, authDispatch] = useReducer(authReducer, initialAuthData)

    const signUp = async(userDetails) => {
            console.log("userDetaisl:", userDetails)
        try{
            const response = await axios.post("/api/auth/signup", {
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                email: userDetails.email,
                password: userDetails.password
            })
                console.log("response:", response.data)
                localStorage.setItem("tokenNotesApp", response.data.encodedToken);
                authDispatch({type: "LOGIN_SUCCESS", payload: {toastMessage: "Signed up", name: response.data.createdUser.firstName, email: response.data.createdUser.email, userID:response.data.createdUser._id }})
                  
        }catch(error){
            console.log(error);
            authDispatch({type:"HANDLER_ERROR", payload:{toastMessage: "Handler error"}})
        }

    }

  
    const login = async(userDetails) => {
        try{
            const response = await axios.post("/api/auth/login", {email: userDetails.email, password: userDetails.password})
            
            localStorage.setItem("tokenNotesApp", response.data.encodedToken)
            authDispatch({type:"LOGIN_SUCCESS", payload:{toastMessage: "Logged In", name: response.data.foundUser.firstName, email: response.data.foundUser.email, userID: response.data.foundUser._id}})
            
        }catch(error){
            console.log(error)
            authDispatch({type:"HANDLER_ERROR", payload:{toastMessage: "Handler error"}})
        }
    }



    const testlogin = async() => {
        const userEmail = "testlogin@gmail.com";
        const userPassword = "test123";
        try{
            const response = await axios.post("/api/auth/login", {email: userEmail, password: userPassword})
            // console.log(response);
            
                localStorage.setItem("tokenNotesApp", response.data.encodedToken)
                authDispatch({type:"LOGIN_SUCCESS", payload:{toastMessage: "Logged In", name: response.data.foundUser.firstName, email: response.data.foundUser.email, userID: response.data.foundUser._id}})
        }catch(error){
            console.log(error)
            authDispatch({type:"HANDLER_ERROR", payload:{toastMessage: "Handler error"}})
        }
    }

       const logout = () => {
        authDispatch({type:"LOGOUT", payload:{toastMessage: "Logged out", name: "", email: "", userID: ""}})
    }

    return (
        <AuthContext.Provider value={{authState, authDispatch, signUp, login, testlogin, logout}}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider}