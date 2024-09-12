import Navbar from "@/components/Navbar/Navbar";
import Search from "@/components/Search/Search";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden min-h-[100vh] relative">
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-white to-blue-200 z-[-1]">
        <Image
          src='/bg_image.png'
          alt="img_bg"
          fill={true}
          className='mix-blend-multiply object-contain'
        />
      </div>
      <Navbar />

      <Search />
    </div>
  );
}
