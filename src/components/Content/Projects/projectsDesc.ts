type project = {
    name: string,
    desc: string,
    imgUrl?: string,
    ghUrl: string,
    isLive: boolean
}

// domain https://github.com/appleseed0910 /chart_demo/
// page domain https://appleseed0910.github.io /chart_demo/

export const projectsData: Array<project> = [
    {
        name: 'chart',
        desc: '',
        imgUrl: '',
        ghUrl: '/chart_demo',
        isLive: true
    },
    {
        name: 'quickgit',
        desc: '',
        imgUrl: '',
        ghUrl: '',
        isLive: false
    },
    {
        name: 'autoexcel',
        desc: '',
        imgUrl: '',
        ghUrl: '',
        isLive: false
    },
    {
        name: 'okr',
        desc: '',
        imgUrl: '',
        ghUrl: '',
        isLive: true
    }
]