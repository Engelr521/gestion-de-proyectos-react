import React from 'react'
import { Outlet } from 'react-router-dom';

const LayoutAdmin = () => {
    return (
        <div>
            <nav>
                <h1 className="text-center text-primary">Este es el Navbar de las paginas Admin</h1> 
                <Outlet />
            </nav>
        </div>
    )
}

export default LayoutAdmin;