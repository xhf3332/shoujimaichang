import React from 'react'
import { isLogin } from '../utils/auth'
import {Route,Redirect} from 'react-router-dom'

export default function PrivateRoute({children,...rest}) {
    return (
        <Route
            {...rest}
            render={() => {
                return isLogin()?children:<Redirect to="/login" />
            }}
        />
    )
}
