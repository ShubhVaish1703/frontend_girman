
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto, Poppins } from 'next/font/google'
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useEffect } from 'react';
import SearchInput from '../Search/SearchInput';

const roboto = Roboto({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export default function Navbar2({ searchValue }) {
    const [show, setShow] = useState(false);

    const [slide, setSlide] = useState(true);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Check if the user is scrolling up by at least 50 pixels
        const isScrollingUp = currentScrollY < prevScrollY || currentScrollY <= 100;

        // Update the previous scroll position
        setPrevScrollY(currentScrollY);
        setSlide(isScrollingUp);
    };
    // Add scroll event listener to the window
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, prevScrollY]);

    const handleShow = () => {
        setShow((prev) => !prev);
    }

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[990] transition-opacity duration-500 ${slide ? '' : 'opacity-0 file:hidden'}`}
        >
            <div className="w-full bg-white py-3.5 sm:py-6 px-6 sm:px-10 shadow-md border-b border-gray-200 flex justify-around  relative">

                <Link href="/">
                    <div className='flex gap-2 justify-start items-center  relative'>
                        <Image
                            src='/Logo.png'
                            alt="logo"
                            width="150"
                            height="150"
                            className='mix-blend-multiply'
                        />
                    </div>
                </Link>

                <div className="flex justify-end items-center w-full lg:hidden ml-4">
                    <HiOutlineMenu className={`text-3xl cursor-pointer border-2  rounded-md duration-200 ${show ? "border-blue-600" : "border-white"}`} onClick={handleShow} />
                </div>

                {/* Desktop Navbar */}
                <div className=' lg:block w-full hidden max-w-md'>
                    <SearchInput searchValue={searchValue} />
                </div>

                {/* Mobile Navbar */}
                <ul
                    className={`
        lg:hidden z-[999]  fixed w-full top-[3.8rem] overflow-y-auto  py-4 px-10
        duration-500 ${show ? "right-0" : "right-[-100%]"} bg-blue-100 shadow-md`}
                >
                    <li >
                        <SearchInput searchValue={searchValue} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
