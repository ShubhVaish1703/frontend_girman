import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'

const Search = () => {
    return (
        <div className='px-4 py-3'>
            <div className="h-[350px] md:h-[200px]"></div>

            <div className='mx-auto max-w-xl flex flex-col gap-6'>
                <Image
                    src='/white_logo.svg'
                    alt="logo"
                    width="250"
                    height="250"
                    className='mix-blend-multiply w-full'
                />

                <div className=',t-6'>
                    <SearchInput  />
                </div>
            </div>
        </div>
    )
}

export default Search
