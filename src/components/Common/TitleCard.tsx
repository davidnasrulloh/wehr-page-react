type Props = {
    value: string;
};

const TItleCard = ({ value }: Props) => {
    return (
        <h4 className="text-md md:text-lg xl:text-xl font-medium">{value}</h4>
    );
};

export default TItleCard;
