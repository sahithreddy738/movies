import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList'
import {POPULAR_MOVIES_URL,API_OPTIONS} from "../../utils/constants"

const HomeBody = () => {
  return (
    <div className='w-[80%] mx-auto'>
         <div className='py-6 flex flex-col gap-4' >
           <h1 className='text-2xl font-semibold'> Popular Movies</h1>
           <MovieList />
         </div>
    </div>
  )
}

export default HomeBody