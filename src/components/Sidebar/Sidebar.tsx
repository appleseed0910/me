import './style.less';

import githubUrl from '../../assets/github-circle.svg'
import mailUrl from '../../assets/send-mail.svg'
import linkedin from '../../assets/linkedin.svg'
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
                        <Link to='https://www.linkedin.com/in/xinyi-hu-a95282127' target='_blank'>
                            <img className='linkedin' src={linkedin} alt="linkedin page"/>
                        </Link>
                        <Link to='https://github.com/appleseed0910' target='_blank'>
                            <img className='github' src={githubUrl} alt='github page'/>
                        </Link>
                        <Link to='mailto:appleseed0910@gmail.com' target='_blank'>
                            <img className='mail' src={mailUrl} alt="Send mail to me!" />
                        </Link>
                        
                        
                    </div>
                </div>


            </div>
        </>
    );
}

export default Sidebar;
