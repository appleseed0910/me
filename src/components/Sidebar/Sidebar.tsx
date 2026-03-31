import './style.less';

import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <ul className="nav">
                    <li><Link to="/">Content 1</Link></li>
                    <li><Link to="/content2">Content 2</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
