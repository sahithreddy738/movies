import React from 'react'
import MoviesSearchList from '../SearchMoviesList'
import { useParams } from 'react-router-dom'

const SearchBody = () => {
  const {movieName}=useParams()
  return (
    <div className='w-[80%] mx-auto'>
         <div className='py-6 flex flex-col gap-4' >
           <h1 className='text-xl sm:text-xl md:text-2xl font-semibold '>{`Search Results for "${movieName}"`}</h1>
          <MoviesSearchList />
         </div>
    </div>
  )
}

export default SearchBody