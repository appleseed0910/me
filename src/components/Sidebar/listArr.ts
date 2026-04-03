type SidebarListItem = Array<{
    label: 'About' | 'Projects' | 'Experience' | 'Education',
    path: '/' | '/projects' | '/experience' | '/education',
    fox: 'default' | 'bingo' | 'sleep' | 'yawn'
}>


export const ListArr: SidebarListItem = [
    {
        label: 'About',
        path: '/',
        fox: 'default'
    },
    {
        label: 'Projects',
        path: '/projects',
        fox: 'bingo'
    },
    {
        label: 'Experience',
        path: '/experience',
        fox: 'sleep'
    },
    {
        label: 'Education',
        path: '/education',
        fox: 'yawn'
    }
]