import './style.less';

import githubUrl from '../../assets/github-circle.svg'
import mailUrl from '../../assets/send-mail.svg'
import { ListArr } from './listArr';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation()
    const [ fox, setFox ] = useState('default')


    return (
        <>
            <div className="sidebar">
                
                <div className="empty-cell"></div>

                <div className="sticky-container">
                    <div className="fox-container">
                        <div className={fox === '' ? 'default' : `${fox} ${fox}-playing`}></div>
                    </div>

                    <div className="ul-container">
                        <ul className='nav'>
                            {ListArr.map((item, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        onMouseEnter={() => {setFox(item.fox)}}
                                        onMouseLeave={() => {setFox('')}}
                                        className={location.pathname === item.path ? 'active' : ''}>
                                        <Link to={item.path}>{item.label}</Link>
                                    </li>
                                )
                            })}
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
