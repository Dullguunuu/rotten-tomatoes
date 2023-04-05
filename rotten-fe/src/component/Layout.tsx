import React from 'react'
import { Meta } from './Meta';
import { Navbar } from './Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <div>
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
        </>

    )
}


export default Layout;
