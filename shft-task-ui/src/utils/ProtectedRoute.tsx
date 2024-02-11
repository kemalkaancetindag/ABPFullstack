import React from 'react'
import { Cookies, useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
    
    children: React.JSX.Element
}

export default function ProtectedRoute(props: ProtectedRouteProps) {

    let isAuth= window.localStorage.getItem("auth") !== null
  


    if(!isAuth) {
    
        return <Navigate to={'/login'}/>
    } 

    return props.children
 
}
