import { Button, Card, FileInput, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'
import { saveProfile } from '../services/assetService';
import {  saveAsset } from '../services/indexDB'

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


const useFileHandler = (e) => {
    const [value, setValue] = useState(e)

    function handleChange(e) {
        setValue(e.target.files[0])
    }

    return [value, handleChange]
}

const Form = ({setFormDisplay}) => {

    
    const [alias, setAlias] = useInput("")
    const [address, setAddress] = useInput("")
    const [fullName, setFullName] = useInput("")
    const [email, setEmail] = useInput("")
    const [phoneNumber, setPhoneNumber] = useInput("")
    const [file, setFile] = useFileHandler(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append("address", address)
        formData.append("fullName", fullName)
        formData.append("emailAddress", email)
        formData.append("phoneNumber", phoneNumber)
        formData.append("image", file)

        const assetDetails = await saveProfile(formData)
        const asset = {
            alias,
            "assetName": assetDetails.assetName,
            "transactionId": assetDetails.transactionId
        }
        await saveAsset(asset)

        setFormDisplay(false)
    }

    return (
        <div className='max-w'>
            <Card>
                <form className='flex flex-col gap-4' onSubmit={(e) => handleSubmit(e)}>
                    <div className='mb-2 block'>
                        <div>
                            <Label
                                htmlFor="alias"
                                value="Alias('nickname') name for your profile"
                            />

                            <TextInput
                                id="alias"
                                type="text"
                                onChange={(e) => setAlias(e)}
                                placeholder="Add your alias name here"
                                required={true}
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="address"
                                value="Your address"
                            />

                            <TextInput
                                id="address"
                                type="text"
                                onChange={(e) => setAddress(e)}
                                placeholder="Copy your cardano address here"
                                required={true}
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="fullName"
                                value="Your profile's full name"
                            />

                            <TextInput
                                id="fullName"
                                type="text"
                                onChange={(e) => setFullName(e)}
                                placeholder="Enter your full name"
                                required={true}
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="emailAddress"
                                value="Your profile's full name"
                            />

                            <TextInput
                                id="emailAddress"
                                type="email"
                                onChange={(e) => setEmail(e)}
                                placeholder="Enter your email address"
                                required={true}
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="phoneNumber"
                                value="Your profile's phone number"
                            />

                            <TextInput
                                id="phoneNumber"
                                type="text"
                                onChange={(e) => setPhoneNumber(e)}
                                placeholder="Enter your phone number"
                                required={true}
                            />
                        </div>
                        <div>
                            <Label 
                                htmlFor='image'
                                value='Your profile picture'
                            />
                            <FileInput 
                                id='image'
                                onChange={(e) => setFile(e)}
                                helperText="Upload your profile picture"
                            />
                        </div>
                        <div className='grid grid-cols-2 place-items-center'>
                            <Button type='submit'>
                                Create Profile
                            </Button>
                            
                        </div>
                    </div>
                </form>

            </Card>
        </div>
    )
}

export default Form
