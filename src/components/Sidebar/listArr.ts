type SidebarListItem = Array<{
    label: 'About' | 'Projects' | 'Experience' | 'Skills',
    path: '/' | '/projects' | '/experience' | '/skills',
    fox: 'default' | 'bingo' | 'sleep' | 'yawn'
}>


export const ListArr: SidebarListItem = [
    {
        label: 'About',
        path: '/',
        fox: 'default'
    },
    {
        label: 'Skills',
        path: '/skills',
        fox: 'yawn'
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
    }
]