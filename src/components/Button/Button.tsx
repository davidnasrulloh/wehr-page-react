type Props = {
    title: string;
};

const Button = ({ title }: Props) => {
    return (
        <button
            className={`bg-[#FF5151] px-4 py-3 rounded-md text-lg max-w-fit`}
        >
            {title}
        </button>
    );
};

export default Button;
