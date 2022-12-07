import { ListGroup } from 'flowbite-react'
import React, { useState } from 'react'
import { fetchAll } from '../services/indexDB'
import Profile from './Profile'

const Profiles = () => {

  const [assets, setAssets] = useState([])
  const [profiles, setProfiles] = useState([])

  const all = async() => {
    setAssets(await fetchAll())

    let profileRenders = []
    assets.forEach(a => {
      profileRenders.push(
        <ListGroup.Item key={a.id}>
          <Profile assetName={a.name} alias={a.alias} key={a.id} />
        </ListGroup.Item>
      )
    })
    setProfiles(profileRenders)
  }
  
  return (
    <div className='flex justify-center'>
        {
          all() ?

          <ListGroup>
            {profiles}
          </ListGroup> :
          <div 
            role="status" 
            className="p-4 space-y-4 max-w-md rounded border border-gray-200 
              divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 
              md:p-6 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                      <div className="h-2.5 bg-gray-300 rounded-full 
                        dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-200 
                        rounded-full dark:bg-gray-700"></div>
                  </div>
                  <div className="h-2.5 bg-gray-300 
                    rounded-full dark:bg-gray-700 w-12"></div>
              </div>
          </div>
        }
        
    </div>
  )
}

export default Profiles