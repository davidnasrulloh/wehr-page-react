import ChartActivity from '../components/Dashboard/ChartActivity/ChartActivity';

const chartDataList = [
    {
        title: 'Total Employees',
        total: 1200,
        countMen: 700,
        countWomen: 500,
        countPersent: 15,
    },
    {
        title: 'Talent Request',
        total: 950,
        countMen: 550,
        countWomen: 400,
        countPersent: 10,
    },
];
const ChartActivityList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chartDataList.map((data, index) => (
                <ChartActivity
                    key={index}
                    title={data.title}
                    total={data.total}
                    countMen={data.countMen}
                    countWomen={data.countWomen}
                    countPersent={data.countPersent}
                />
            ))}
        </div>
    );
};

export default ChartActivityList;
