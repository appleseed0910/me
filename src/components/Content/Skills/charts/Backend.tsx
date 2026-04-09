import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { skillData, ranges } from '../skill-data';
import type { DispatchProps } from '../skill-data.ts'

function Backend({ chartType = 'backend', registerDispatcher }: DispatchProps) {
    const bkChartRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<echarts.ECharts | null>(null);

    let series = [
        {
            data: skillData.backend.map(item => item.weight),
            type: 'bar',
            stack: 'a',
            name: 'a',
            barWidth: 20,
            itemStyle: {
                color: 'rgba(248, 255, 235, 0.8)',
                borderColor: '#9cd53a',
                borderRadius: [0, 16, 16, 0]
            },
            emphasis: {
                itemStyle: {
                    color: '#4e7a06',
                    borderColor: '#4e7a06'
                }
            }
        }
    ];
    const option = {
        grid: {
            top: 30,
            bottom: 30,
            left: 30,
            right: 50,
            containLabel: true,
        },
        xAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: { 
                fontSize: 12,
                show: true,
                formatter: (value: number) => {
                    return ranges.find(r => value <= r.max)?.label ?? value
                },
                margin: 20
            },
            axisTick: { show: true },
            splitLine: { show: true },
        },
        yAxis: {
            type: 'category',
            inverse: true,
            data: skillData.backend.map(item => item.name),
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                fontSize: 10,
                width: 80,
                overflow: 'break'
            }
        },
        series: series as any,
    };

    useEffect(() => {
        if (bkChartRef.current) {
            if (!chartInstanceRef.current) {
                chartInstanceRef.current = echarts.init(bkChartRef.current);
            }
            chartInstanceRef.current.setOption(option, { notMerge: true });

            // Register dispatcher after chart is created
            if (registerDispatcher) {
                registerDispatcher(chartType, (action: any) => {
                    chartInstanceRef.current?.dispatchAction(action);
                });
            }
        }

        return () => {
            chartInstanceRef.current?.dispose();
            chartInstanceRef.current = null;
        };
    }, [registerDispatcher, chartType]);

    // resize
    useEffect(() => {
        const handleResize = () => {
            chartInstanceRef.current?.resize();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="chart" ref={bkChartRef}></div>
    );
}

export default Backend;
