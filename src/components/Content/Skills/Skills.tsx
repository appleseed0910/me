import './style.less';
import { skillData } from './skill-data';
import CardStack from './CardsStack';

function Skills() {
    return (
        <>
            <section className="skill-page">
                <h6 className="skill-page-title">I am good at: </h6>

                <div className="skill-page-content flex flex-col md:flex-row">
                    <article className="tags-container md:w-1/3 w-full ">

                        <div className="fr-tags-container">
                            {skillData.frontend.map((item, idx) => {
                                return (
                                    <div key={idx} className="tag tag-fr">
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="br-tags-container">
                            {skillData.backend.map((item, idx) => {
                                return (
                                    <div key={idx} className="tag tag-br">
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="cm-tags-container">
                            {skillData.commu.map((item, idx) => {
                                return (
                                    <div key={idx} className="tag tag-cm">
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>

                        <div className='comment'>
                            <p>The list will always keeps loading more...</p>
                            <p>Currently, I'm exploring/playing with:</p>
                            <ul className='exploring'>
                                <li><span className='mark-fox'>[&nbsp;&nbsp;&nbsp;Fiber&nbsp;&nbsp;&nbsp;]</span></li>
                                <li><span className='mark-grass'>[&nbsp;&nbsp;&nbsp;AWS&nbsp;&nbsp;&nbsp;]</span></li>
                                <li><span className='mark-fox'>[&nbsp;&nbsp;&nbsp;Electron&nbsp;&nbsp;&nbsp;]</span></li>
                                <li><span className='mark-grass'>[&nbsp;&nbsp;&nbsp;Automation&nbsp;&nbsp;&nbsp;]</span></li>
                            </ul>
                        </div>


                    </article>

                    <article className="charts-container md:w-2/3 w-full">
                        <CardStack />
                    </article>
                </div>
            </section>
        </>
    );
}

export default Skills;
