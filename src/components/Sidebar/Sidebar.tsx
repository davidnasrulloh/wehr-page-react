import SidebarItem from './SidebarItem';

const menuSidebar = [
    {
        title: 'Main Menu',
        items: [
            {
                icon: 'ri:dashboard-line',
                label: 'Dashboard',
                active: true,
                link: '/dashboard',
            },
            {
                icon: 'ri:user-add-line',
                label: 'Recruitment',
                active: false,
                link: '/recruitment',
            },
            {
                icon: 'ri:calendar-line',
                label: 'Schedule',
                active: false,
                link: '/schedule',
            },
            {
                icon: 'ri:team-line',
                label: 'Employee',
                active: false,
                link: '/employee',
            },
            {
                icon: 'ri:group-line',
                label: 'Department',
                active: false,
                link: '/department',
            },
        ],
    },
    {
        title: 'Other',
        items: [
            {
                icon: 'ri:headphone-line',
                label: 'Support',
                active: false,
                link: '/support',
            },
            {
                icon: 'ri:settings-3-line',
                label: 'Settings',
                active: false,
                link: '/settings',
            },
        ],
    },
];

type Props = {
    isSidebarOpen: boolean;
};

const Sidebar = ({ isSidebarOpen }: Props) => {
    return (
        <>
            {isSidebarOpen && (
                <nav className="min-h-screen bg-primary-light/10">
                    <div
                        id="sidebar"
                        className={`min-h-full py-12 px-4 lg:p-10`}
                    >
                        <div className="font-semibold text-2xl lg:text-4xl lg:px-10 pb-8">
                            WeHR
                        </div>
                        {menuSidebar.map((section, sectionIndex) => (
                            <SidebarItem
                                key={sectionIndex}
                                items={section.items}
                                title={section.title}
                            />
                        ))}
                    </div>
                </nav>
            )}
        </>
    );
};

export default Sidebar;
