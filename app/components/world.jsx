import React from 'react'
import Image from 'next/image'

const WorldMap = () => {
  return (
    <div className='flex justify-center items-center md:py-20 px-8 md:mx-10 my-20'>
      <Image  src="/images/world-map.png" alt="world map" width={1000} height={500} />
    </div>
  )
}

export default WorldMap