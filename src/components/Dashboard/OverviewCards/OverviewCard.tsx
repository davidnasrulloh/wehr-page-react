import TItleCard from '../../Common/TItleCard';

type Props = {
    title: string;
    count: number;
    desc: string;
    bgColor: string;
    txColor: string;
};

const OverviewCard = ({ title, count, desc, txColor, bgColor }: Props) => {
    return (
        <div className={`flex flex-col ${bgColor} rounded-xl p-6 gap-3`}>
            <TItleCard value={title} />
            <h5 className="text-4xl font-medium">{count}</h5>
            <p className={`text-md ${txColor}`}>{desc}</p>
        </div>
    );
};

export default OverviewCard;
