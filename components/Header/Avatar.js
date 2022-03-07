import Image from 'next/image'
import React from 'react'

const Avatar = ({ url, className }) => {
  return (
    <div className={`relative h-10 w-10 transition duration-150 transform hover:scale-110 ${className} p-5`}>
        <Image 
            // loading='lazy' by default
            src={url}
            alt='Profile Picture'
            layout='fill'
            objectFit='cover'
            className='rounded-full cursor-pointer '
        />
    </div>
  )
}

export default Avatar