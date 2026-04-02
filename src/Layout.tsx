import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/TopBar/Topbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './styles/layout.less'

import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="page">
                <div className="top-container">
                    <aside
                        className="hidden md:block"
                        style={{ borderRight: '1px dashed black' }}
                    >
                        <Sidebar />
                    </aside>

                    <div className="body-container">
                        <header
                            className="block md:hidden"
                            style={{ borderBottom: '1px solid black' }}
                        >
                            <Topbar />
                        </header>
                        <Header />
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Layout;
