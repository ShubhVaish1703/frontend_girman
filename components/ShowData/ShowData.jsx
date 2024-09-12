import Image from 'next/image'
import React from 'react'
import Card from './Card'

const ShowData = ({ data }) => {
    console.log(data);
    return (
        <div className="flex justify-center items-center py-8">
            {
                data && data.length > 0
                    ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-start'>
                        {
                            data?.map((item, i) => {
                                return <Card key={i} data={item} />
                            })
                        }
                    </div>
                    :
                    <div className='flex justify-center items-center min-h-[80vh]'>
                        <Image
                            src='/not_found.png'
                            alt="logo"
                            width="350"
                            height="350"
                            className='mix-blend-multiply'
                        />
                    </div>
            }
        </div>
    )
}

export default ShowData
