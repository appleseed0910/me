import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="page">
                <div className="top-container">
                    <Sidebar />
                    <div className="body-container">
                        <Header />
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout
