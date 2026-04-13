import { useEffect, useRef } from 'react';
import * as Matter from 'matter-js';
import { skillData, ranges } from '../skill-data';
import type { DispatchProps } from '../skill-data.ts';

function Commu({ chartType = 'commu', registerDispatcher }: DispatchProps) {
    const commuRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    useEffect(() => {
        const container = commuRef.current!;

        const initMatter = (container: HTMLDivElement, width: number, height: number) => {
            if (commuRef.current && !engineRef.current) {
                const engine = Matter.Engine.create();
                engineRef.current = engine;

                const render = Matter.Render.create({
                    element: commuRef.current,
                    engine: engine,
                    options: {
                        width: width,
                        height: height,
                        background: '#fff',
                        wireframes: false
                    },
                });
                renderRef.current = render;

                render.canvas.style.pointerEvents = 'none';

                let ground = Matter.Bodies.rectangle(300, 300, 600, 30, {
                    isStatic: true,
                });

                Matter.Composite.add(engine.world, [ground]);
                Matter.Render.run(render);

                let runner = Matter.Runner.create();
                runnerRef.current = runner;
                Matter.Runner.run(runner, engine);
            }
        };

        const observer = new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            const height = width * 0.5;
            if (width > 0 && height > 0) {
                observer.disconnect();
                initMatter(container, width, height)
            }
        });

        observer.observe(container)

        return () => {
            observer.disconnect();

            // Clean up Matter.js resources
            if (runnerRef.current) {
                Matter.Runner.stop(runnerRef.current);
                runnerRef.current = null;
            }
            if (renderRef.current) {
                Matter.Render.stop(renderRef.current);
                renderRef.current.canvas.remove();
                renderRef.current = null;
            }
            if (engineRef.current) {
                Matter.World.clear(engineRef.current.world, false);
                Matter.Engine.clear(engineRef.current);
                engineRef.current = null;
            }
        };
    }, []);

    return <div ref={commuRef}></div>;
}

export default Commu;
