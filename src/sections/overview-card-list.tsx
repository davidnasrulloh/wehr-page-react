import OverviewCard from '../components/Dashboard/OverviewCards/OverviewCard';

const overviewCardData = [
    {
        title: 'Available Position',
        count: 24,
        desc: '4 Urgently needed',
        bgColor: 'bg-[#FF5151]/10',
        txColor: 'text-primary-default',
    },
    {
        title: 'Job Open',
        count: 10,
        desc: '4 Active hiring',
        bgColor: 'bg-[#3786F1]/10',
        txColor: 'text-[#3786F1]',
    },
    {
        title: 'New Employees',
        count: 24,
        desc: '4 Department',
        bgColor: 'bg-[#65E982]/10',
        txColor: 'text-[#EE61CF]',
    },
];

const OverviewCardList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {overviewCardData.map((data, index) => (
                <OverviewCard
                    key={index}
                    title={data.title}
                    count={data.count}
                    desc={data.desc}
                    bgColor={data.bgColor}
                    txColor={data.txColor}
                />
            ))}
        </div>
    );
};

export default OverviewCardList;
