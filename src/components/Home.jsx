import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet'
import { Card } from 'flowbite-react'
import React from 'react'
import AuthenticatedHome from './AuthenticatedHome'
import Login from './Login'

const Home = () => {
    const {isConnected} = useCardano()
  return (
    <div className='w-2/3'>
        {
            isConnected ?
            <AuthenticatedHome />:
            <Login />
        }
    </div>
  )
}

export default Home