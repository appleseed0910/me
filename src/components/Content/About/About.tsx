import './style.less'

import { about_paras } from './about-content'


function About() {

    return (
        <>
            <section className='about-page'>
                <h6 className='about-page-title'>Who I am ...</h6>

                <div className="about-page-content">
                    {about_paras.map((item, idx) => {
                        return <div key={idx}>{item}</div>
                    })}
                </div>

            </section>
        </>
    )
}

export default About