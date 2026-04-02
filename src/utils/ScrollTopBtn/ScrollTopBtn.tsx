import { useEffect, useState } from "react"
import './style.less'

import btnUrl from '../../assets/arrow-up-left-square.svg'

function ScrollTopBtn () {
    const [ show, setShow ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 150 ? setShow(true) : setShow(false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const scrollToTop = () => {
        window.scroll({top: 0, behavior: 'smooth'})
    }

    return show ? (<button className='scroll-btn' onClick={scrollToTop}>
        <img src={btnUrl} alt="Send mail to me!" />
    </button>) : null
}

export default ScrollTopBtn