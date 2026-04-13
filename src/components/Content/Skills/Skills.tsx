import './style.less';
import { useState, useCallback } from 'react';
import { skillData } from './skill-data';
import CardStack from './CardsStack';

function Skills() {
    const [dispatchers, setDispatchers] = useState<{
        frontend?: ((action: any) => void);
        backend?: ((action: any) => void);
        commu?: ((action: any) => void);
    }>({});
    const [activeCardId, setActiveCardId] = useState<string>('a');

    // Map card IDs to chart types
    const cardToChartType: Record<string, 'frontend' | 'backend' | 'commu'> = {
        'a': 'frontend',
        'b': 'backend',
        'c': 'commu',
        'd': 'frontend'
    };

    const registerDispatcher = useCallback((chartType: 'frontend' | 'backend' | 'commu', dispatcher: (action: any) => void) => {
        setDispatchers(prev => ({
            ...prev,
            [chartType]: dispatcher
        }));
    }, []);

    const toggleBar = useCallback((idx: number, toggle: 'highlight' | 'downplay', chartType?: 'frontend' | 'backend' | 'commu') => {
        // If chartType is provided, use it; otherwise use active card's chart type
        const targetChartType = chartType || cardToChartType[activeCardId];
        const dispatcher = dispatchers[targetChartType];

        if (dispatcher) {
            dispatcher({
                type: toggle,
                seriesIndex: 0,
                dataIndex: idx
            });
        }
    }, [dispatchers, activeCardId]);


    return (
        <>
            <section className="skill-page">
                <h6 className="skill-page-title">I am good at: </h6>

                <div className="skill-page-content flex flex-col md:flex-row">
                    <article className="tags-container md:w-1/3 w-full ">

                        <div className="fr-tags-container">
                            {skillData.frontend.map((item, idx) => {
                                return (
                                    <div 
                                        key={idx} 
                                        className="tag tag-fr" 
                                        onMouseEnter={() => {toggleBar(idx, 'highlight')}}
                                        onMouseLeave={() => {toggleBar(idx, 'downplay')}}>
                                        {item.name}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="br-tags-container">
                            {skillData.backend.map((item, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        className="tag tag-br"
                                        onMouseEnter={() => {toggleBar(idx, 'highlight', 'backend')}}
                                        onMouseLeave={() => {toggleBar(idx, 'downplay', 'backend')}}>
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
                        <CardStack
                            registerDispatcher={registerDispatcher}
                            onActiveCardChange={setActiveCardId}
                        />
                    </article>
                </div>
            </section>
        </>
    );
}

export default Skills;
