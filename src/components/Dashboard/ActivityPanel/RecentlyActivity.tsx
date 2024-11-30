import Button from '../../Button/Button';

const RecentlyActivity = () => {
    return (
        <div className="rounded-xl bg-[#161E54] text-white flex flex-col gap-4 w-full md:w-[45%] lg:w-full">
            <div className="bg-[#1B204A] rounded-t-xl">
                <h6 className="px-8 py-6 text-xl">Recently Activity</h6>
            </div>
            <div className="px-6 py-3 flex flex-col gap-3">
                <p className="text-sm text-white/50">
                    10.40 AM, Fri 10 Sept 2021
                </p>
                <p className="text-2xl">You Posted a New Job</p>
                <p className="text-white/80">
                    Kindly check the requirements and terms of work and make
                    sure everything is right.
                </p>
            </div>

            <div className="px-6 flex flex-col xl:flex-row xl:items-center gap-4 pb-6 justify-between">
                <p>Today you makes 12 Activity</p>
                <Button title="See All Activity" />
            </div>
        </div>
    );
};

export default RecentlyActivity;
