import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'
import Form from './Form'
import Profiles from './Profiles'
import { getProfile } from "../services/assetService";
import AssetView from './AssetView'
import { useCardano } from '@cardano-foundation/cardano-connect-with-wallet'
import Logout from './Logout'

//  Custom hook
//  Watches for changes in state and updates the value
//  on change
const useInput = (initialState) => {
    const [value, setValue] = useState(initialState);
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    return [value, handleChange];
};


const AuthenticatedHome = () => {
    const {disconnect} = useCardano;

    const [formDisplay, setFormDisplay] = useState(false)
    const [assetName, setAssetName] = useInput("")
    const [profile, setProfile] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault()
        setProfile({})

        let assetDetails = await getProfile(assetName)
        console.log(assetDetails)
        let profile = {
            "name": assetDetails.fullName,
            "email": assetDetails.emailAddress,
            "phoneNumber": assetDetails.phoneNumber,
            "image": cleanUrl(assetDetails.imageURL)
        }
        setProfile(profile)
    }

    const cleanUrl = (ipfsUrl) => {
        let hash = ipfsUrl.split("//")[1]
        
        return `https://ipfs.io/ipfs/${hash}`
    }

    return (
        <div className=' p-4'>
            {
                formDisplay ? 
                    <div className='gap-4'>
                        <Button 
                            type='submit' 
                            color="failure"
                            onClick={() => setFormDisplay(false)}
                        >
                            Back
                        </Button>
                        <Form setFormDisplay={setFormDisplay} />
                    </div>

                :
                    <div className='grid grid-flow-row auto-rows-max gap-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <Button
                                onClick={() => setFormDisplay(true)}
                            >
                                <div className='flex space-x-4'>
                                    <div>Add profile</div>
                                    <svg 
                                        className="w-6 h-6" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg">
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth="2" 
                                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                    </svg>
                                </div>
                            </Button>
                            <Logout />
                        </div>
			<div className="grid grid-cols-2 gap-4">
				<Profiles/>
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='text-center'>
                            <Label
                                htmlFor="assetName"
                                value="Copy an paste your asset name here"
                            />

                            <div className='grid grid-cols-2 gap-5'>
                                <TextInput
                                    id="assetName"
                                    type="text"
                                    onChange={(e) => setAssetName(e)}
                                    placeholder="Paste your asset name here"
                                    required={true}
                                />
                                <div className='grid grid-cols-2 place-items-center'>
                                    <Button
                                        type='submit'>
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br></br>
                    {
                        profile ? 
                            <AssetView profile={profile} />
                                :
                            <div></div>
                    }
                </div>
			</div>
                    </div>
            }
        </div>
    )
}

export default AuthenticatedHome
