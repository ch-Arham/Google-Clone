import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react/cjs/react.development';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Header/Avatar';
import { ImageURL } from '../assets/ImageURL'
import HeaderOptions from './HeaderOptions';

const SearchHeader = () => {
    const router = useRouter();

    const searchInputRef = useRef(null);

    //handle search input field
    const search = e => {
        e.preventDefault();
        const searchedInputVal = searchInputRef.current.value;

        if(!searchedInputVal) return;

        router.push(`/search?searchedTerm=${searchedInputVal}`)

        searchInputRef.current.value="";
  }
    
    return (
    <header className='sticky top-0 bg-white z-50'>
        <div className='flex items-center w-full p-6'>
            <Image 
                src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google"
                height={40}
                width={120}
                onClick={()=>router.push('/')}
                className="cursor-pointer"
            />

            <form className='flex items-center px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl flex-grow'>
                <input 
                    type="text" 
                    name="" 
                    id=""
                    placeholder={router.query.searchedTerm}
                    ref={searchInputRef}  
                    className="flex-grow w-full focus:outline-none"  
                />

                <XIcon 
                    className='h-7 text-gray-500  sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125' 
                    onClick={e=>searchInputRef.current.value=""}
                />

                <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />

                <SearchIcon  className='h-6 hidden sm:inline-flex text-blue-500 cursor-pointer' />
                
                {/* search button for enter to work but hidden */}

                <button hidden type='submit' onClick={search} >search</button>

            </form>
            <Avatar className="ml-auto" url={ImageURL}/>
        </div>

        {/* Header Options */}
        <HeaderOptions />
    </header>
  )
}

export default SearchHeader