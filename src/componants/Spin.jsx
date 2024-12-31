import { Spinner } from 'flowbite-react'
import React from 'react'

function Spin() {
  return (
    <div className='w-full h-svh absolute top-0 left-0 flex justify-center items-center'>
        <Spinner size='xl' color="failure"/>
    </div>
  )
}

export default Spin