import { useState } from 'react'
import './style.less'

function Header () {
    const [ activeFox, setActiveFox ] = useState(false)

    return (
        <>
            <div className="header">
                <div 
                    className="header-title"
                    onMouseEnter={() => {setActiveFox(true)}}
                    onMouseLeave={() => {setActiveFox(false)}}>
                    Header
                </div>
                <div className={`icon ${activeFox ? 'playing' : ''}`}></div>
            </div>
        </>
    )
}

export default Header