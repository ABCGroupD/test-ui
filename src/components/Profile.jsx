import { Card, Toast } from 'flowbite-react'
import { HiCheck } from "react-icons/hi";
import React from 'react'
import { useState } from 'react';

const Profile = ({alias, assetName}) => {
    const [isCopied, setIsCopied] = useState(false)

    const copyOnClick = async () => {
        await navigator.clipboard.writeText(assetName)
        console.log("clicked")
        setIsCopied(true)
        console.log("done")
    }

    return (
        <div>
            <Card>
                <div className='flex items-start pb-10'>
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
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                            </path>
                    </svg>
                    <p>Alias: {alias}</p>
                    <p hidden>{assetName}</p>
                    <div onClick={async () => await copyOnClick()}>
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
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 
                                0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
                            </path>
                        </svg>
                    </div>
                </div>
            </Card>
            {
                isCopied ? 
                <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                        <HiCheck className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">
                        Copied!
                    </div>
                    <Toast.Toggle />
                </Toast>
                :
                <div></div>
            }
        </div>
    )
}

export default Profile