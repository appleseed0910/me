import './style.less'
import '../common.less'
import sampleDesc from './projectsDesc'

function Projects() {

    return (
        <>
            <section className='projects-page'>
                <h6 className='projects-page-title'>What I've done! </h6>

                <div className="projects-page-content">
                    {/* <span className='highlight'>TEST</span> */}
                    <p className='intro'>
                        I have listed a few of my <span className='highlight projects'>personal</span> projects below,<br />for my <span className='highlight projects'>professional</span> projects plz refer to my resume :p
                    </p>
                    <div className='container'>
                        <article className='chart'>1</article>
                        <article className='quickgit'>2</article>
                        <article className='autoexcel'>3</article>
                        <article className='okr'>4</article>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Projects