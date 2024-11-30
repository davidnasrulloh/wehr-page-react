import { Icon } from '@iconify/react';
import AnnouncementList from '../components/Dashboard/Announcements/AnnouncementList';

const Announcements = () => {
    return (
        <div className="pt-6 border-[1px] rounded-xl">
            <div className="px-6 pb-4 flex flex-col sm:flex-row justify-between gap-2 md:gap-0">
                <h6 className="text-lg">Announcement</h6>
                <div className="p-2 flex flex-row gap-1 justify-between items-center border-[1px] px-3 py-1 text-xs rounded-md text-gray-500">
                    <p>Today, 13 Sep 2021</p>
                    <Icon
                        className="rotate-90"
                        icon={'formkit:right'}
                        width="24"
                        height="24"
                        color="gray"
                    />
                </div>
            </div>
            <div className="max-h-60 overflow-y-auto scrollbar-none">
                <AnnouncementList />
            </div>
            <button className="text-primary-default text-lg py-3 border-t-[1px] mt-4 flex items-center justify-center w-full hover:bg-primary-default/10 hover:rounded-b-xl">
                <p>See All Announcement</p>
            </button>
        </div>
    );
};

export default Announcements;
