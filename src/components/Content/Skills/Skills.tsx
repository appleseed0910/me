import './style.less';
import { skillData } from './skill-data';

function Skills() {
    return (
        <>
            <section className="skill-page">
                <h6 className="skill-page-title">I am good at: </h6>

                <div className="skill-page-content flex flex-col md:flex-row">
                    <article className="tags-container md:w-1/3 w-full">

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

                        <div className='comment'>The list still keeps loading...</div>
                    </article>

                    <article className="chars-container md:w-2/3 w-full">
                        2
                    </article>
                </div>
            </section>
        </>
    );
}

export default Skills;
