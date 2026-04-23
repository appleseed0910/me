import './style.less'
import '../common.less'
import { projectsData } from './projectsDesc'
import { Link } from 'react-router-dom'


const repoUrl = 'https://github.com/appleseed0910'
const demoUrl = 'https://appleseed0910.github.io'

function Projects() {

    return (
        <>
            <section className='projects-page'>
                <h6 className='projects-page-title'>What I've done! </h6>

                <div className="projects-page-content">
                    <p className='intro'>
                        I have listed a few of my <span className='highlight projects'>personal</span> projects below,<br />for my <span className='highlight projects'>professional</span> projects plz refer to my resume :p
                    </p>
                    <div className='container'>
                        {projectsData.map((project,idx) => {
                            return (
                                <article key={idx} className={project.class}>
                                    <p className='title'>{project.desc}</p>
                                    <div className='desc'>
                                        {project.imgUrl ? 
                                            <>
                                                <div className='desc-img'>
                                                    <Link to={`${demoUrl}${project.ghUrl}`} target='_blank' >
                                                        <img src={project.imgUrl} alt="" />
                                                    </Link>                                                    
                                                </div>
                                            </>:
                                            project.isLive ? 
                                                // for projects has live links
                                                <>
                                                    <div className='desc-text'>
                                                        <div className='desc-text-links'>
                                                            <div className='desc-text-link-start'>
                                                                <Link to={`${repoUrl}${project.ghUrl}`} target='_blank'>Repo</Link>
                                                            </div>
                                                            <div className='desc-text-link-end'>
                                                                <Link to={`${demoUrl}${project.ghUrl}`} target='_blank'>Live demo</Link>
                                                            </div>
                                                        </div>
                                                        <div className='desc-text-paras'>
                                                            {project?.text?.map((para, i) => {
                                                                return <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                                                            })}
                                                        </div>
                                                        
                                                    </div>
                                                </>:
                                                // for projects doesn't has live links
                                                <>
                                                    <div className='desc-text'>
                                                        <div className='desc-text-link-start'>
                                                            <Link to={`${repoUrl}${project.ghUrl}`} target='_blank'>Repo</Link>
                                                        </div>
                                                        <div className='desc-text-paras'>
                                                            {project?.text?.map((para, i) => {
                                                                return <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                                                            })}
                                                        </div>
                                                    </div>
                                                </>
                                        }

                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Projects