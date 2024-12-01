import TItleCard from '../../Common/TItleCard';

type Props = {
    title: string;
    total: number;
    countMen: number;
    countWomen: number;
    countPersent: number;
};

const ChartActivity = ({
    title,
    countMen,
    countPersent,
    countWomen,
    total,
}: Props) => {
    return (
        <div className="border-[1px] p-6 rounded-xl flex flex-row justify-between">
            <div className="flex flex-col gap-4 w-full justify-between">
                <TItleCard value={title} />
                <p className="text-5xl font-medium">{total}</p>

                <div className="flex flex-col gap-1 text-gray-500 text-sm">
                    <p>{countMen} Men</p>
                    <p>{countWomen} Women</p>
                </div>
            </div>

            <div className="h-full flex flex-col justify-between items-end">
                <img src="/chart.png" alt="card" className="max-w-[100%]" />
                <p className="py-1 px-4 text-end text-sm rounded-md bg-[#FFEFE7] inline-block max-w-fit">
                    +{countPersent} Past month
                </p>
            </div>
        </div>
    );
};

export default ChartActivity;
