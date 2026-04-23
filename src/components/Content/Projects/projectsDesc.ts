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
        ghUrl: '',
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