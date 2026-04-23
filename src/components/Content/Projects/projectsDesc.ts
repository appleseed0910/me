import chartUrl from '../../../assets/projects/chart.png'
import okrUrl from '../../../assets/projects/okr.png'

type project = {
    name: string,
    desc: string,
    class: string,
    imgUrl?: string,
    ghUrl: string,
    isLive?: boolean,
    text?: Array<string>
}

// domain https://github.com/appleseed0910 /chart_demo/
// page domain https://appleseed0910.github.io /chart_demo/

export const projectsData: Array<project> = [
    {
        name: 'chart',
        class: 'chart',
        desc: 'chart',
        imgUrl: chartUrl,
        ghUrl: '/chart_demo'
    },
    {
        name: 'chart-text',
        class: 'chart-text',
        desc: '...',
        text: [
            'Our team receives and processes some tickets from customers per day.',
            '<br />',
            'As the Scrum Master and a developer, I care of how these tickets reflect our team\'s work status and the root cause of problems.',
            'So I built this report app with <b><a href=\'https://echarts.apache.org/en/index.html\' target=\'blank\'>Echarts</a></b> and <b>React</b>.',
            '<br />',
            'As a newbie into Data Viz and React, I gotta say, <span class=\'highlight projects\'><b>setOption</b> and <b>useEffect</b></span> they are meant to be together!!!'
        ],
        ghUrl: '/chart_demo',
        isLive: true
    },
    {
        name: 'quickgit',
        class:'quickgit',
        desc: 'quickgit',
        ghUrl: '/quickgit',
        text: [
            'One of my clumsy hand-made wheel.',
            'When I work on my personal project on my own, I felt it was too <span class=\'highlight projects\'>troublesome</span> to always type three times of git commands,',
            '<i>git add :/</i>, <i>git commit -m</i>, <i>git push</i>',
            'I clearly know only me will do changes, so I figured out to pack these three cmd together.',
            '<br />',
            'by <b>NodeJS</b>, the custom cmd for myself was built easily.',
            'Usage: <b>quickgit \'your commit message here\'</b> then your changes are on!'
        ],
        isLive: false
    },
    {
        name: 'autoexcel',
        class: 'autoexcel',
        desc: 'autoexcel',
        ghUrl: '/autoexcel',
        text: [
            'The other clumsy trouble-killer wheel.',
            'This was built with <b>PlayWright</b>, <b><a href=\'https://sheetjs.com/\' target=\'blank\'>SheetJS</a></b> and <b>NodeJS</b>.',
            'During my daily work, I have to deal with a bunch of copy-paste-sort of page data field by field,',
            '<br />',
            '<span class=\'highlight projects\'>As a developer, my ability and entertainment is to wheeling things,</span>',
            'So I wrote this automation script to help my grabbing data and put them into cells.'
        ],
        isLive: false
    },
    {
        name: 'okr-text',
        class: 'okr-text',
        desc: '...',
        ghUrl: '/anime-exer',
        text: [
            'The other small demo for my Scrum Master role.',
            '<b><a href=\'https://animejs.com/\' target=\'blank\'>Animate.js</a></b> is the main tool I used. ',
            '<del>Tho I don\'t feel I have done a good job.</del>',
            '<br />',
            'When I was asked to create a slides to report, instead of PowerPoint, I tried to challenge myself with an web animation demo.',
            '<br />',
            'The demo was made for presenting, so I didn\'t add any \'how to use\' tips,',
            'Just <b><span class=\'highlight projects\'>Scroll down</span></b> is enough.',
            'Squares on the top left corner is also <b><span class=\'highlight projects\'>Clickable</span></b>.'
        ],
        isLive: true
    },
    {
        name: 'okr',
        class: 'okr',
        desc: 'okr',
        imgUrl: okrUrl,
        ghUrl: '/anime-exer'
    }
]