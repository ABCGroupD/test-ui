import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet'
import { Button, Card } from 'flowbite-react'
import React from 'react'

const Login = () => {
    const {
        connect
    } = useCardano();

    const onConnect = () => console.log("Connected")

    return (
        <div className='mx-auto'>
            <Card>
                <Button
                    pill={true}
                    onClick={() => connect(
                        'nami',
                        onConnect
                    )}
                >
                    Login with Nami
                </Button>
            </Card>
        </div>
    )
}

export default Login