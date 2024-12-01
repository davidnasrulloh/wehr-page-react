import { useEffect, useState } from 'react';
import './App.css';
import RecentlyActivity from './components/Dashboard/ActivityPanel/RecentlyActivity';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Announcements from './sections/announcement';
import ChartActivityList from './sections/chart-activity-list';
import OverviewCardList from './sections/overview-card-list';
import Upcoming from './sections/upcoming';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const isLarge = useMediaQuery('(min-width: 900px)');
    const isSmall = useMediaQuery('(max-width: 520px)');
    useEffect(() => {
        if (isLarge) {
            setSidebarOpen(false);
        }

        if (isSmall) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }, [isLarge, isSmall]);

    return (
        <main className="flex w-full">
            <section>
                <Sidebar isSidebarOpen={isSidebarOpen} />
            </section>
            {/* Main Content Section */}
            <section className="flex flex-col w-full h-screen">
                <div className="sticky top-0 z-50 bg-white px-4 lg:px-16">
                    <Navbar
                        setSidebarOpen={setSidebarOpen}
                        isSidebarOpen={isSidebarOpen}
                    />
                </div>

                <div className="flex-1 overflow-y-scroll scrollbar-hide py-6 px-4 lg:px-16">
                    <h4 className="font-medium text-2xl md:text-3xl mb-6">
                        Dashboard
                    </h4>
                    <div className="flex flex-col xl:flex-row gap-8">
                        <div className="flex flex-col gap-8 lg:gap-4 flex-[3]">
                            <OverviewCardList />
                            <ChartActivityList />
                            <Announcements />
                        </div>
                        <div className="flex flex-col md:flex-row xl:flex-col gap-4 flex-[2]">
                            <RecentlyActivity />
                            <Upcoming />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
