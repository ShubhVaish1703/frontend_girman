import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='border border-gray-200 bg-white shadow-sm p-2 md:p-2.5 rounded-lg'>
            <div className=''>
                <p className='text-sm'>{data?.first_name} {data?.last_name}</p>
            </div>
        </div>
    )
}

export default Card
