import './style.less';

import githubUrl from '../../assets/github-circle.svg'
import mailUrl from '../../assets/send-mail.svg'
import { useState } from 'react';



import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation()
    const [ activeFox, setActiveFox ] = useState(false)

    return (
        <>
            <div className="sidebar">
                
                <div className="empty-cell"></div>

                <div className="sticky-container">
                    <div className="fox-container">
                        <div className={`icon ${activeFox ? 'playing' : ''}`}></div>
                    </div>

                    <div className="ul-container">
                        <ul className='nav'>
                            <li 
                                onMouseEnter={() => {setActiveFox(true)}}
                                onMouseLeave={() => {setActiveFox(false)}}
                                className={location.pathname === '/' ? 'active' : ''}>
                                    <Link to="/">About</Link>
                            </li>
                            <li
                                className={location.pathname === '/projects' ? 'active' : ''}>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li
                                className={location.pathname === '/experience' ? 'active' : ''}>
                                <Link to="/experience">Experience</Link>
                            </li>
                            <li
                                className={location.pathname === '/education' ? 'active' : ''}>
                                <Link to="/education">Education</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="icon-container">
                        <Link to='mailto:appleseed0910@gmail.com'>
                            <img className='mail' src={mailUrl} alt="Send mail to me!" />
                        </Link>
                        <Link to='https://github.com/appleseed0910'>
                            <img className='github' src={githubUrl} alt='github page' />
                        </Link>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Sidebar;
