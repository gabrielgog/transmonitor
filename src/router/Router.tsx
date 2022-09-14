import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { appRoutePaths } from './Router.utils'
import Overview from 'pages/Overview/Overview'


const Router = () => {
    return (
        <Routes>
            <Route path={appRoutePaths.root} element={<Overview />} />
        </Routes>
    )
}

export default Router;


