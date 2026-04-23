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
            'Our team receives and processes customer tickets every day.',
            '<br />',
            'As both a Scrum Master and a developer, I care about how these tickets reflect our team\'s working status and the root cause behind problems.',
            'So I built this report app with <b><a href=\'https://echarts.apache.org/en/index.html\' target=\'blank\'>Echarts</a></b> and <b>React</b>.',
            '<br />',
            'As a newbie to Data Viz and React, I gotta say, <span class=\'highlight projects\'><b>setOption</b> and <b>useEffect</b></span> they are meant to be together!!!'
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
            'One of my clumsy hand-made wheels.',
            'When I was working on my personal project on my own, I felt it was too <span class=\'highlight projects\'>troublesome</span> to always type three times of git commands,',
            '<i>git add :/</i>, <i>git commit -m</i>, <i>git push</i>',
            'I clearly know \'m the only one making changes, so I figured out to pack these three cmds together.',
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
            'Another clumsy trouble-killer wheel.',
            'This was built with <b>PlayWright</b>, <b><a href=\'https://sheetjs.com/\' target=\'blank\'>SheetJS</a></b> and <b>NodeJS</b>.',
            'During my daily work, I often have to deal with a bunch of copy-paste-sort of page data field by field,',
            '<br />',
            '<span class=\'highlight projects\'>As a developer, my ability and my fun is to wheeling things,</span>',
            'So I wrote this automation script to help my grabbing data and put them into Excel cells.'
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
            '<b><a href=\'https://animejs.com/\' target=\'blank\'>Anime.js</a></b> is the main tool I used. ',
            '<del>Tho I don\'t feel I did a good job.</del>',
            '<br />',
            'When I was asked to create slides for a report, instead of PowerPoint, I tried to challenge myself with an web animation demo.',
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