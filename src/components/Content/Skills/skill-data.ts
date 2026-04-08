type skillItem = {
    name: string,
    weight: number
}

type skillTags = Array<skillItem>

export const skillData : {
    frontend: skillTags, backend: skillTags, commu: skillTags
} = {
    frontend: [
        { name: 'React', weight: 85 },
        { name: 'SAP UI5', weight: 100},
        { name: 'Sencha Ext js', weight: 60},
        { name: 'Tailwind', weight: 35 },
        { name: 'Typescript', weight: 95 },
        { name: 'ECharts', weight: 75 },
        { name: 'Less', weight: 75 },
        { name: 'HTML5 CSS3 JavaScript ES8', weight: 95},
        { name: 'Animate.js, P5.js', weight: 30},
    ],
    backend: [
        { name: 'Nodejs', weight: 40 },
        { name: 'Docker', weight: 25 },
        { name: 'PlaywrightTS', weight: 70 }
    ],
    commu: [
        { name: 'Communication', weight: 90 },
        { name: 'Collaboration', weight: 80 },
        { name: 'Agile', weight: 100},
        { name: 'Fluent speaking English', weight: 90},
        { name: 'Japanese N3 certified', weight: 60 }
    ]
}