import React from 'react'

import LoadingSpinner from './LoadingSpinner';

export default function ResultComponent({ charData, isLoading }) {
    if (charData.name == '') {
        return (
            <div className="p-8 flex min-h-full justify-center border-2 px-6 py-12 mt-8 lg:px-8 ">
                <h1>Invalid username</h1>
            </div>
        )
    }
    if (isLoading) {
        return (
            <div className="p-8 flex min-h-full justify-center border-2 px-6 py-12 mt-8 lg:px-8 ">
                <LoadingSpinner />
            </div>
        )
    }


    return (
        // <div>{charData.name}</div>
        <div className="p-8 flex min-h-full justify-center border-2 px-6 py-12 mt-8 lg:px-8 ">
            <div>
                <h1>{charData.name}</h1>
                <h1>{charData.vocation}</h1>
                <h1>{charData.level}</h1>
                <h1>{charData.world}</h1>
            </div>
        </div>
    )
}
