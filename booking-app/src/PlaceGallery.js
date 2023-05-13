import React from 'react'
import { useState } from 'react'

const PlaceGallery = ({place}) => {

    const [showAllPhotos, setShowAllPhotos] = useState(false);

    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 min-h-screen text-white bg-black">
                <div className="grid gap-4 p-8 bg-black ">
                    <div>
                        <h2 className="mr-48 text-3xl ">Photos of {place.title} </h2>
                        <button onClick={() => setShowAllPhotos(false)} className="fixed flex object-cover gap-1 px-4 py-2 text-black bg-white shadow right-12 top-8 rounded-2xl shadow-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Close Photos
                        </button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <div>
                            <img className="md:max-w-full lg:max-w-5xl sm:max-w-full" src={photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
                <div>
                    {place.photos?.[0] && (
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className="object-cover cursor-pointer aspect-square " src={place.photos[0]} alt="" />
                        </div>
                    )}
                </div>
                <div className="grid">
                    {place.photos?.[1] && (
                        <img onClick={() => setShowAllPhotos(true)} className="object-cover cursor-pointer aspect-square" src={place.photos[1]} alt="" />
                    )}
                    <div className="overflow-hidden ">
                        {place.photos?.[2] && (
                            <img onClick={() => setShowAllPhotos(true)} className="relative object-cover cursor-pointer top-2 aspect-square" src={place.photos[2]} alt="" />
                        )}
                    </div>
                </div>
            </div>

            <button onClick={() => setShowAllPhotos(true)} className="absolute flex gap-1 px-4 py-2 bg-white shadow shadow-md shadow-gray-500 bottom-2 right-2 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                </svg>
                Show More Photos
            </button>
        </div>
    )
}

export default PlaceGallery
