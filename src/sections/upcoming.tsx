import { Icon } from '@iconify/react';
import UpcomingList from '../components/Dashboard/ActivityPanel/UpcomingSchedule';
import TItleCard from '../components/TitleCard';

const Upcoming = () => {
    return (
        <div className="pt-6 border-[1px] rounded-xl w-full md:w-[55%] lg:w-full">
            <div className="px-6 pb-4 flex flex-col lg:flex-row justify-between gap-2 lg:gap-0">
                <TItleCard value="Upcoming Schedule" />

                <div className="p-2 flex flex-row gap-1 justify-between items-center text-xs border-[1px] px-3 py-1 rounded-md text-gray-500">
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
            <div className="max-h-56 overflow-y-auto scrollbar-none">
                <UpcomingList />
            </div>
            <button className="text-primary-default text-lg py-3 border-t-[1px] mt-4 flex items-center justify-center w-full hover:bg-primary-default/10 hover:rounded-b-xl">
                <p>Create a New Schedule</p>
            </button>
        </div>
    );
};

export default Upcoming;
