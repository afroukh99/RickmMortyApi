import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch'
import Card from '../card/Card';
import PaginationBar from '../paginationBar/PaginationBar';
import "./cards.scss"




const Cards = () => {
  const [pageNumber , setPageNumber] = useState(1);
  const Characters = useFetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`).slice(0, 9)
  return (
    <div className='cards'>
      <div className="cards-container">

        {
          Characters.map(Character => (
            <Card key={Character?.id}  {...Character} />
          ))
        }
      </div>
      <PaginationBar setPageNumber = {setPageNumber} />

    </div>
  )
}

export default Cards