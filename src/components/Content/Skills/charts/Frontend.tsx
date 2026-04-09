import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

function Frontend() {
    const feChartRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<echarts.ECharts | null>(null);
    var series = [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'a',
            name: 'a',
        },
        {
            data: [10, 46, 64, '-', 0, '-', 0],
            type: 'bar',
            stack: 'a',
            name: 'b',
        },
        {
            data: [30, '-', 0, 20, 10, '-', 0],
            type: 'bar',
            stack: 'a',
            name: 'c',
        },
        {
            data: [30, '-', 0, 20, 10, '-', 0],
            type: 'bar',
            stack: 'a',
            name: 'd',
        },
        {
            data: [10, 20, 150, 0, '-', 50, 10],
            type: 'bar',
            stack: 'a',
            name: 'e',
        },
    ];
    const option = {
        grid: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
            containLabel: true,
        },
        xAxis: {
            type: 'value',
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
        },
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: { show: false },
            axisTick: { show: false },
        },
        series: series as any,
    };

    const stackInfo: {
        [key: string]: { stackStart: number[]; stackEnd: number[] };
    } = {};
    for (let i = 0; i < series[0].data.length; ++i) {
        for (let j = 0; j < series.length; ++j) {
            const stackName = series[j].stack;
            if (!stackName) {
                continue;
            }
            if (!stackInfo[stackName]) {
                stackInfo[stackName] = {
                    stackStart: [],
                    stackEnd: [],
                };
            }
            const info = stackInfo[stackName];
            const data = series[j].data[i];
            if (data && data !== '-') {
                if (info.stackStart[i] == null) {
                    info.stackStart[i] = j;
                }
                info.stackEnd[i] = j;
            }
        }
    }
    for (let i = 0; i < series.length; ++i) {
        const data = series[i].data as
            | number[]
            | { value: number; itemStyle: object }[];
        const info = stackInfo[series[i].stack];
        for (let j = 0; j < series[i].data.length; ++j) {
            // const isStart = info.stackStart[j] === i;
            const isEnd = info.stackEnd[j] === i;
            const topBorder = isEnd ? 30 : 0;
            const bottomBorder = 0;
            data[j] = {
                value: data[j] as number,
                itemStyle: {
                    borderRadius: [
                        bottomBorder,
                        topBorder,
                        topBorder,
                        bottomBorder,
                    ],
                },
            };
        }
    }

    useEffect(() => {
        if (feChartRef.current) {
            if (!chartInstanceRef.current) {
                chartInstanceRef.current = echarts.init(feChartRef.current);
            }
            chartInstanceRef.current.setOption(option, { notMerge: true });
        }

        return () => {
            chartInstanceRef.current?.dispose();
            chartInstanceRef.current = null;
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            chartInstanceRef.current?.resize();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="chart" ref={feChartRef}></div>
        </>
    );
}

export default Frontend;
