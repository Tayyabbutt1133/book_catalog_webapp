import Listing from '@/app/components/bookslisting/Listing'
import Button from '@/app/components/Button'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='mx-4'>
                <Button />
                <Listing />
            </div>
        </>
    )
}

export default page
