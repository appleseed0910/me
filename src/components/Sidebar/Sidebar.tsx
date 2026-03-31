import './style.less';

import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <nav>
                    <Link to="/">Content 1</Link>
                    <Link to="/content2">Content 2</Link>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
