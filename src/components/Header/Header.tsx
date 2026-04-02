import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

import './style.less'

const headerText = 'Hi, it\'s <strong>Xinyi</strong> here.^700 I\'m a __'
const slogans = ['true lazy fox, pseudo human bean', 'full-stack developer', 'certified scrum master', 'curious advanturer','React padawan', 'web designer', 'AI apprentice', 'Nodejs rookie', 'licensed mobile suit pilot', 'fan-fiction writer', 'SAP UI5 veteran', 'rain people', 'kitty guru', 'Docker a bit']

function Header() {
    const title = useRef(null)
    const slogan = useRef(null)

    useEffect(() => {
        const titleTyped = new Typed(title.current, {
            strings: [headerText],
            typeSpeed: 50,
            contentType: 'html'
        })

        return () => {
            titleTyped.destroy()
        }
    }, [])

    useEffect(() => {
        const sloganTyped = new Typed(slogan.current, {
            strings: slogans,
            typeSpeed: 40,
            backSpeed: 20,
            contentType: 'html',
            showCursor: false,
            loopCount: 2,
            shuffle: true,
            startDelay: 3500,
            backDelay: 1000
        })

        return () => {
            sloganTyped?.destroy()
        }
    }, [])

    return (
        <>
            <div className="header">
                <div className="header-title">
                    <div className="span-container title">
                        <span ref={title} />
                    </div>
                    <div className="span-container slogan">
                        <span ref={slogan} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header