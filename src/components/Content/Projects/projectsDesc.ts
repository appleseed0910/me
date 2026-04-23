import chartUrl from '../../../assets/projects/chart.png'
import okrUrl from '../../../assets/projects/okr.png'

type project = {
    name: string,
    desc: string,
    class: string,
    imgUrl?: string,
    ghUrl: string,
    isLive: boolean
}

// domain https://github.com/appleseed0910 /chart_demo/
// page domain https://appleseed0910.github.io /chart_demo/

export const projectsData: Array<project> = [
    {
        name: 'chart',
        class: 'chart',
        desc: 'chart',
        imgUrl: chartUrl,
        ghUrl: '/chart_demo',
        isLive: true
    },
    {
        name: 'chart-text',
        class: 'chart-text',
        desc: '...',
        ghUrl: '',
        isLive: false
    },
    {
        name: 'quickgit',
        class:'quickgit',
        desc: 'quickgit',
        ghUrl: '/quickgit',
        isLive: false
    },
    {
        name: 'autoexcel',
        class: 'autoexcel',
        desc: 'autoexcel',
        ghUrl: '/autoexcel',
        isLive: false
    },
    {
        name: 'okr-text',
        class: 'okr-text',
        desc: '...',
        ghUrl: '/anime-exer',
        isLive: false
    },
    {
        name: 'okr',
        class: 'okr',
        desc: 'okr',
        imgUrl: okrUrl,
        ghUrl: '/anime-exer',
        isLive: true
    }
]