import { Icon } from '@iconify/react';

type Props = {
    title: string;
    time: string;
};

const UpcomingItem = ({ title, time }: Props) => {
    return (
        <div className="border-[1px] p-4 bg-[#FAFAFA] rounded-lg flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <p className="text-md text-black font-light">{title}</p>
                <p className="text-xs text-gray-400">{time}</p>
            </div>
            <Icon icon="tabler:dots" width="24" height="24" color="gray" />
        </div>
    );
};

export default UpcomingItem;
