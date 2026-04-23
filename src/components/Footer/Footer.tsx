import './style.less'
import { Link } from 'react-router-dom'

function Footer () {

    return (
        <>
            <div className="footer">
                <div className="copyright">
                    Copyright &copy; 2026 <span className='name'>Xinyi</span>. 
                    Illustration supported by &#64;<Link to='https://www.mihuashi.com/profiles/881737' target='_blank'><span className="name">大睡</span></Link>
                </div>
                <div className="contact"></div>
            </div>
        </>
    )
}

export default Footer