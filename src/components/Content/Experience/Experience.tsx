import './style.less'
import '../common.less'
import { intro, exp } from './exp-data'


function Experience () {

    return (
        <>
            <section className='exp-page'>
                <h6 className='exp-page-title'>Where I've been? </h6>

                <div className="exp-page-content">
                    {intro.map((para, i) => {
                        return (
                            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                        )
                    })}
                    <ol className='exp-page-content-list'>
                        {exp.map((item, idx) => {
                            return (
                                <li 
                                    key={idx} 
                                    dangerouslySetInnerHTML={{ __html: item }} 
                                    className='item'/>
                            )
                        })}
                    </ol>
                </div>

            </section>
        </>
    )
}

export default Experience