type skillItem = {
    name: string,
    weight: number
}

type skillTags = Array<skillItem>

export const skillData : {
    frontend: skillTags, backend: skillTags, commu: skillTags
} = {
    frontend: [
        { name: 'SAP UI5', weight: 95},
        { name: 'React', weight: 80 },
        { name: 'Sencha Ext js', weight: 50},
        { name: 'Tailwind', weight: 35 },
        { name: 'Typescript', weight: 85 },
        { name: 'ECharts', weight: 75 },
        { name: 'Less', weight: 75 },
        { name: 'HTML5 CSS3 JavaScript ES8', weight: 85},
        { name: 'Animate.js, P5.js', weight: 35},
    ],
    backend: [
        { name: 'Nodejs', weight: 40 },
        { name: 'Docker', weight: 25 },
        { name: 'PlaywrightTS', weight: 65 },
        { name: 'Java', weight: 30 }
    ],
    commu: [
        { name: 'Communication', weight: 90 },
        { name: 'Collaboration', weight: 80 },
        { name: 'Agile', weight: 100},
        { name: 'Fluent speaking English', weight: 90},
        { name: 'Japanese N3 certified', weight: 60 }
    ]
}

export const ranges = [
    { max: 0, label: 'Start' },
    { max: 20, label: 'Beginner' },
    { max: 40, label: 'Familiar' },
    { max: 60, label: 'Intermediate' },
    { max: 80, label: 'Proficient' },
    { max: 100, label: 'Expert' }
]

export interface DispatchProps {
    chartType?: 'frontend' | 'backend';
    registerDispatcher?: (chartType: 'frontend' | 'backend', dispatcher: (action: any) => void) => void;
}