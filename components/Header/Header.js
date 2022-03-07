import React from 'react'
import { ImageURL } from '../../assets/ImageURL'
import Avatar from './Avatar'
import { ViewGridIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <section className='flex justify-between p-5 text-sm font-semibold text-gray-700'>
        <div className='flex space-x-4 items-center'>
            <p className='link'>About</p>
            <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
            <p className='link'>Gmail</p>
            <p className='link'>Images</p>

            <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>

            <Avatar url={ImageURL}/>

        </div>
    </section>
  )
}

export default Header