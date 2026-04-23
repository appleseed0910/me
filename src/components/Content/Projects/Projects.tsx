import './style.less'
import '../common.less'
import { projectsData } from './projectsDesc'
import { Link } from 'react-router-dom'


const repoUrl = 'https://github.com/appleseed0910'
const pageUrl = 'https://appleseed0910.github.io'
const imgUrl = '../../../assets/projects'

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
                        {projectsData.map((project,idx) => {
                            return (
                                <article key={idx} className={project.class}>
                                    <p className='title'>{project.desc}</p>
                                    <div className='desc'>
                                        {project.imgUrl ? 
                                            <>
                                                <div className='desc-img'>
                                                    <Link to={`${pageUrl}${project.ghUrl}`} target='_blank' >
                                                        <img src={project.imgUrl} alt="" />
                                                    </Link>                                                    
                                                </div>
                                            </>:
                                            project.isLive ? 
                                                // for projects has live links
                                                <>
                                                </>:
                                                // for projects doesn't has live links
                                                <>
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