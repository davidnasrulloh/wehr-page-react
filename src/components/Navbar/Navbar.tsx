import { Icon } from '@iconify/react';
import SearchBar from './SearchBar';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

type SidebarSectionProps = {
    isSidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isSidebarOpen, setSidebarOpen }: SidebarSectionProps) => {
    const isLarge = useMediaQuery('(min-width: 901px)');
    const isSmall = useMediaQuery('(max-width: 900px)');

    const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);

    useEffect(() => {
        if (isLarge) {
            setIsOpenSearchBar(false);
        }

        if (isSmall) {
            setIsOpenSearchBar(false);
        } else {
            setIsOpenSearchBar(true);
        }
    }, [isLarge, isSmall]);
    return (
        <nav className="py-6 flex flex-row justify-between border-b-[1px]">
            <div
                className={`${isOpenSearchBar && 'w-full'} flex justify-between flex-row items-center gap-2 md:max-w-[40%] lg:max-w-[50%]`}
            >
                <button
                    onClick={() => setSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden p-2"
                >
                    <Icon icon="line-md:menu" width={24} height={24} />
                </button>
                <SearchBar
                    isOpenSearchBar={isOpenSearchBar}
                    setIsOpenSearchBar={setIsOpenSearchBar}
                    isSmall={isSmall}
                />
            </div>

            {((!isOpenSearchBar && isSmall) || isLarge) && (
                <div className="flex flex-row justify-end items-center gap-4 lg:gap-8 ">
                    <Icon
                        icon={'iconoir:bell-notification-solid'}
                        width="24"
                        height="24"
                        color="B2B2B2"
                    />
                    <Icon
                        icon={'solar:chat-unread-bold'}
                        width="24"
                        height="24"
                        color="B2B2B2"
                    />
                    <div className="flex flex-row justify-center items-center gap-4">
                        <img
                            src="/david-photo.png"
                            className="rounded-full"
                            alt=""
                            width={44}
                            height={44}
                        />
                        <p className="hidden md:block font-medium">
                            David Nasrulloh
                        </p>
                        <Icon
                            className="rotate-90"
                            icon={'formkit:right'}
                            width="24"
                            height="24"
                            color="gray"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
