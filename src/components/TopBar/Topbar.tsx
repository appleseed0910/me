import './style.less'

import { Link } from "react-router-dom";

function Topbar() {
    return (
        <>
            <div className="top-bar">
                <nav>
                    <Link to="/">Content 1</Link>
                    <Link to="/content2">Content 2</Link>
                </nav>
            </div>
        </>
    );
}

export default Topbar
