import UpcomingItem from './UpcomingItem';

const UpcomingList = () => {
    const upcomingData = [
        {
            title: 'Maintenance Scheduled',
            time: 'Today, 10:00 AM',
            type: 'priority',
        },
        {
            title: 'New Features Released',
            time: 'Yesterday, 3:45 PM',
            type: 'others',
        },
        {
            title: 'System Downtime',
            time: '2 days ago, 11:30 AM',
            type: 'priority',
        },
        { title: 'Team Meeting', time: '3 days ago, 2:00 PM', type: 'others' },
    ];

    const priorityData = upcomingData.filter(item => item.type === 'priority');
    const otherData = upcomingData.filter(item => item.type === 'others');

    return (
        <div className="space-y-4 px-6">
            {priorityData.length > 0 && (
                <div>
                    <h6 className="font-medium text-sm mb-2 text-gray-400">
                        Priority
                    </h6>
                    <div className="space-y-4">
                        {priorityData.map((item, index) => (
                            <UpcomingItem
                                key={index}
                                title={item.title}
                                time={item.time}
                            />
                        ))}
                    </div>
                </div>
            )}

            {otherData.length > 0 && (
                <div>
                    <h6 className="font-medium text-sm mb-2 text-gray-400">
                        Others
                    </h6>
                    <div className="space-y-4">
                        {otherData.map((item, index) => (
                            <UpcomingItem
                                key={index}
                                title={item.title}
                                time={item.time}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpcomingList;
