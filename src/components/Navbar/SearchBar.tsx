import { Icon } from '@iconify/react';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    isOpenSearchBar: boolean;
    setIsOpenSearchBar: Dispatch<SetStateAction<boolean>>;
    isSmall: boolean;
};

const SearchBar = ({ isOpenSearchBar, setIsOpenSearchBar, isSmall }: Props) => {
    return (
        <>
            {isOpenSearchBar ? (
                <div className="w-full flex items-center justify-between gap-2">
                    <div className="flex items-center border-[1px] rounded-md px-4 py-2.5 bg-gray-50 shadow-sm w-full md:w-[20rem] lg:w-[32rem] lg:max-w-[55%]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 bg-transparent outline-none text-gray-500 placeholder-gray-400 w-full"
                        />
                        <Icon
                            icon={'ri:search-line'}
                            width="24"
                            height="24"
                            color="B2B2B2"
                        />
                    </div>

                    {isSmall && (
                        <Icon
                            icon={'ion:close'}
                            onClick={() => setIsOpenSearchBar(false)}
                            width="24"
                            height="24"
                            color="B2B2B2"
                        />
                    )}
                </div>
            ) : (
                <Icon
                    icon={'ri:search-line'}
                    width="24"
                    height="24"
                    color="B2B2B2"
                    onClick={() => setIsOpenSearchBar(true)}
                />
            )}
        </>
    );
};

export default SearchBar;
