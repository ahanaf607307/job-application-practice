import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Firebase/AuthProvider'

function PrivateRoute({children}) {

    const {users,loading} = useContext(AuthContext)
    const location = useLocation()


if(loading) {
    return <h1 className='text-5xl text-red-500 font-bold justify-center items-center'>Loading...</h1>
}
if(users) {
    return children
}


  return <Navigate to='/login' state={location.pathname}></Navigate>
}

export default PrivateRoute
