import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutNormal = () => {
    return (
        <div>
            <nav>
                <h1 className="text-center text-primary">Este es el NavBar para paginas normales</h1> 
                </nav>
            <Outlet />
        </div>
    )
}

export default LayoutNormal
