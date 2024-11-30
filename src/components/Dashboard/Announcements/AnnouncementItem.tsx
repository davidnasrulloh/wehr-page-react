import { Icon } from '@iconify/react';

type Props = {
    title: string;
    time: string;
};

const AnnouncementItem = ({ title, time }: Props) => {
    return (
        <div className="border-[1px] p-4 bg-[#FAFAFA] rounded-lg flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <p className="text-md text-black font-thin">{title}</p>
                <p className="text-xs text-gray-400">{time}</p>
            </div>
            <div className="flex flex-row gap-2">
                <Icon
                    icon="lsicon:pin-pre-filled"
                    width="24"
                    height="24"
                    color="gray"
                />
                <Icon icon="tabler:dots" width="24" height="24" color="gray" />
            </div>
        </div>
    );
};

export default AnnouncementItem;
