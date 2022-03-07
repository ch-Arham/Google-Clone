import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { MicrophoneIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const Body = () => {
  const searchInputRef = useRef(null);

  const [searchInput, setSearchInput] = useState('');

  const router = useRouter();

  //handle search input field
  const search = e => {
    e.preventDefault();
    const searchedInputVal = searchInputRef.current.value;

    if(!searchedInputVal) return;

    router.push(`/search?searchedTerm=${searchedInputVal}`)

    setSearchInput(''); 
  }

  return (
    
    <form  className='flex items-center flex-grow flex-col justify-center mx-2 sm:mx-0'>
        <Image 
            src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
            height={100}
            width={300}
        />

        <div className='flex w-full justify-center mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
            <SearchIcon className='h-5 mr-3 text-gray-500' />
            <input 
              ref={searchInputRef} 
              type="text" 
              className='focus:outline-none flex-grow' 
              placeholder='Search Google or type a URL' 
              value={searchInput}
              name="searchInput"
              onChange={e=>setSearchInput(e.target.value)}
            />
            <MicrophoneIcon className='h-5 text-slate-700' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
            <button onClick={search} className='btn1'>Google Search</button>
            <button onClick={search} className='btn1'>I&apos;m Feeling Lucky</button>
        </div>

    </form>
    
  )
}

export default Body