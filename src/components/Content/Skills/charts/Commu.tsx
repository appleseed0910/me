import { useEffect, useRef } from 'react';
// import * as Matter from 'matter-js';
import { Render, Engine, Bodies, Runner, World, Composite, Mouse, MouseConstraint, Events, Body } from 'matter-js'
import { skillData, ranges } from '../skill-data';
import type { DispatchProps } from '../skill-data.ts';

const getGrounds = (canvasWidth: number, canvasHeight: number) => { 
    const thickness = 16;
    const position: Record<string, [number, number, number, number]> = {
        top: [canvasWidth / 2, thickness / 2, canvasWidth, thickness],
        right: [canvasWidth - thickness / 2, canvasHeight / 2,  thickness , canvasHeight],
        bottom: [canvasWidth / 2, canvasHeight - thickness / 2, canvasWidth, thickness],
        left: [thickness / 2, canvasHeight / 2, thickness, canvasHeight]
    };
    const options = {
        isStatic: true,
        render: {
            fillStyle: '#fffaf2',
            strokeStyle: '#deb887',
            lineWidth: 2,
            opacity: 0.5
        }
    }

    return Object.values(position).map(edge  => {
        return Bodies.rectangle(...edge, options)
    })
}

const getBubbles = (skills: Array<{name: string, weight: number}>) => {
    const labels = skills.map(skill => skill['name'].includes(' ') ? skill['name'].replace(' ', '\n'): skill['name'])
    debugger
}

function Commu({ chartType = 'commu', registerDispatcher }: DispatchProps) {
    const commuRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Engine | null>(null);
    const renderRef = useRef<Render | null>(null);
    const runnerRef = useRef<Runner | null>(null);

    useEffect(() => {
        const container = commuRef.current!;

        const initMatter = (container: HTMLDivElement, width: number, height: number) => {
            if (commuRef.current && !engineRef.current) {
                const engine = Engine.create();
                engineRef.current = engine;

                const render = Render.create({
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

                const mouse = Mouse.create(render.canvas)
                let mousePos = { x: -9999, y: -9999 };1
                // 每帧施加斥力
                Events.on(engine, 'beforeUpdate', () => {
                    const bodies = Composite.allBodies(engine.world);
                
                    for (const body of bodies) {
                        if (body.isStatic) continue;

                        const dx = body.position.x - mousePos.x;
                        const dy = body.position.y - mousePos.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        const repelRadius = 20;  // 斥力范围
                        const repelStrength = 0.03; // 斥力强度

                        if (dist < repelRadius && dist > 0) {
                        // 距离越近，力越大（反比）
                            const force = (repelRadius - dist) / repelRadius * repelStrength;
                            Body.applyForce(body, body.position, {
                                x: (dx / dist) * force,
                                y: (dy / dist) * force,
                            });
                        }
                    }
                });
                // 给每个bodies 加上_label
                Events.on(render, 'afterRender', () => {
                    const ctx = render.context;
                    const bodies = Composite.allBodies(engine.world);

                    bodies.forEach(body => {
                        if (!body._label) return;
                        const { x, y } = body.position;
                        const angle = body.angle;

                        ctx.save();
                        ctx.translate(x, y);   // 移动到 body 中心
                        ctx.rotate(angle);     // 跟随旋转

                        ctx.fillStyle = '#000';
                        ctx.font = '13px sans-serif';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';

                        const lines = body._label.split(' ');  // 按 \n 拆分
                        const lineHeight = 16;
                        const offsetY = -(lines.length - 1) * lineHeight / 2;  // 垂直居中补偿
                        
                        lines.forEach((line, i) => {
                            ctx.fillText(line, 0, offsetY + i * lineHeight);
                        });
                        ctx.restore();
                    });
                });

                // gen boundaries
                const grounds = getGrounds(width, height)
                // gen skill sprite
                // const bubbles = getBubbles(skillData.commu)
                let box = Bodies.rectangle(200, 10, 20, 20, { frictionAir: 0.08 });
                box._label = 'box jj';
                let cir = Bodies.circle(240, 20, 30, { 
                    frictionAir: 0.05,
                    render: {
                        fillStyle: '#fffaf2',
                        strokeStyle: '#deb887',
                        lineWidth: 2,
                        opacity: 0.8
                    }
                })
                cir._label = 'cir haha';

                // load boundaries, skill sprites
                Composite.add(engine.world, [...grounds, box, cir]);
                Render.run(render);

                render.canvas.addEventListener('mousemove', (e) => {
                    const rect  = render.canvas.getBoundingClientRect();
                    mousePos = {
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                    }
                })
                render.canvas.addEventListener('mouseleave', () => {
                    mousePos = { x: -9999, y: -9999 }
                })

                let runner = Runner.create();
                runnerRef.current = runner;
                Runner.run(runner, engine);
            }
        };
        
        const observer = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
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
                Runner.stop(runnerRef.current);
                runnerRef.current = null;
            }
            if (renderRef.current) {
                Render.stop(renderRef.current);
                renderRef.current.canvas.remove();
                renderRef.current = null;
            }
            if (engineRef.current) {
                World.clear(engineRef.current.world, false);
                Engine.clear(engineRef.current);
                engineRef.current = null;
            }
        };
    }, []);

    return <div ref={commuRef} style={{ width: '100%', height: '100%' }}></div>;
}

export default Commu;
