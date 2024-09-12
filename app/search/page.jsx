import Navbar2 from "@/components/Navbar/Navbar2";
import ShowData from "@/components/ShowData/ShowData";
import { fetchData } from "@/lib/fetchdata";

export default async function Home({ searchParams }) {
    let searchValue = searchParams?.find || '';
    let data = await fetchData({ searchValue });

    return (
        <div className="w-full overflow-x-hidden min-h-[100vh] relative">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-white to-blue-100 z-[-1]"></div>
            <Navbar2 searchValue={searchValue} />
            <div className="h-[80px] md:h-[110px]"></div>

            <ShowData data={data} />
        </div>
    );
}
