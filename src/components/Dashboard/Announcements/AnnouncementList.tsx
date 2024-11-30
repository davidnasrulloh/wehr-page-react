import AnnouncementItem from './AnnouncementItem';

const AnnouncementList = () => {
    const announceData = [
        { title: 'Maintenance Scheduled', time: 'Today, 10:00 AM' },
        { title: 'New Features Released', time: 'Yesterday, 3:45 PM' },
        { title: 'System Downtime', time: '2 days ago, 11:30 AM' },
        { title: 'System Downtime', time: '2 days ago, 11:30 AM' },
    ];

    return (
        <div className="space-y-4 px-6">
            {announceData.map((announcement, index) => (
                <AnnouncementItem
                    key={index}
                    title={announcement.title}
                    time={announcement.time}
                />
            ))}
        </div>
    );
};

export default AnnouncementList;
