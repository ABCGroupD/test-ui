import { Card } from 'flowbite-react'
import React from 'react'

const AssetView = ({profile}) => {
  return (
    <div className='max-w-sm'>
        <Card imgSrc={profile.image}>
            <h5
                className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
            >Name: {profile.name}</h5>
            <p
                className="font-normal text-gray-700 dark:text-gray-400"
            >Email: {profile.email}</p>
            <p
                className="font-normal text-gray-700 dark:text-gray-400"
            >Phone number: {profile.phoneNumber}</p>
        </Card>
    </div>
  )
}

export default AssetView