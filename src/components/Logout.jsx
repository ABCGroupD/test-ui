import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet';
import { Button, Card } from 'flowbite-react';
import React from 'react'

const Logout = () => {
    const {
        disconnect
    } = useCardano();

    return (
        <div className='mx-auto'>
            <Button
                color="failure"
                pill={true}
                onClick={() => disconnect()}
            >
                Logout
            </Button>
        </div>
    )
}

export default Logout