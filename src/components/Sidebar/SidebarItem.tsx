import { Icon } from '@iconify/react'; // Sesuaikan dengan library icon yang Anda gunakan

type Item = {
    icon: string;
    link: string;
    label: string;
    active: boolean;
};

type SidebarSectionProps = {
    title: string;
    items: Item[];
};

const SidebarItem = ({ title, items }: SidebarSectionProps) => {
    return (
        <div className="mb-6 text-center">
            <h3 className="text-gray-400 text-xs uppercase mb-2 text-center lg:text-start">
                {title}
            </h3>
            <ul className="flex justify-center lg:justify-start flex-col items-center lg:items-start">
                {items.map((item, itemIndex) => (
                    <li
                        key={itemIndex}
                        className={`flex items-center py-4 rounded-lg gap-6 cursor-pointer hover:text-red-500 hover:cursor-pointer hover:font-medium lg:pr-4 ${
                            item.active
                                ? 'text-red-500 font-medium'
                                : 'text-gray-500'
                        }`}
                    >
                        <Icon icon={item.icon} width="24" height="24" />
                        <a
                            href={item.link}
                            className="hidden lg:block text-start flex-1"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarItem;
