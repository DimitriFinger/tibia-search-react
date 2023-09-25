'use client'

import React, { useState } from 'react'
import { getCharacter } from '@/services/characterService';
import ResultComponent from './ResultComponent';

export default function SearchComponent() {

    const [nickname, setNickname] = useState('');
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [charData, setCharData] = useState({});
    const [errorMessage, setErrorMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        setErrorMessage(false);
        setIsLoading(true);
        setCharData('');

        if (nickname == '') {
            setIsLoading(false);
            return
        }

        setIsResultVisible(true);
        getCharacter(nickname)
            .then(response => setCharData(response))
            .then(() => setIsLoading(false))
            .then(() => { if (charData.name == '') setErrorMessage(true) })

        console.log(charData)
    }

    return (
        <>
            <div className="p-8 inline-block flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-5 text-center text-3xl font-bold ">
                        TIBIA SEARCH
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#">
                        <div>
                            <div className="mt-2 flex justify-center">
                                <input
                                    onChange={(e) => setNickname(e.target.value)}
                                    placeholder='Enter character name...'
                                    className="pl-2.5 block w-3/4 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-400 focus:ring-green-400 focus:ring-2 focus:outline-none hover:ring-green-400 hover:ring-2 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button onClick={handleSearch} className="mt-5 w-1/3 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                                Search
                            </button>
                        </div>
                    </form>
                    {isResultVisible ? <ResultComponent charData={...charData} isLoading={isLoading} errorMessage={errorMessage} /> : null}
                </div>
            </div>
        </>
    )
}
