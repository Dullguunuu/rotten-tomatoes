import React from 'react'
import { Meta } from './Meta';
import { Navbar } from './Navbar';

const Layout = ({ children }: any) => {
    return (
        <>
            <Meta />
            <div className='max-w-5xl mx-auto pt-6'>
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
        </>

    )
}


export default Layout;
