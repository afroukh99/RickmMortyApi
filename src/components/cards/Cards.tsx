import { useContext } from 'react';
import { useFetch } from '../../hooks/useFetch'
import Card from '../card/Card';
import PaginationBar from '../paginationBar/PaginationBar';
import "./cards.scss"
import { FilterContext } from '../../context/FilterContext';




const Cards = () => {
  const { filterItems } = useContext(FilterContext)
  const { pageNumber, name , species, gender, status } = filterItems;
  const Characters  = useFetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}&species=${species}&gender=${gender}&status=${status}`)
    .slice(0, 9)
  return (
    <div className='cards'>
      <div className="cards-container">

        {
          Characters.map(Character => (
            <Card key={Character?.id}  {...Character} />
          ))
        }
        
      </div>
      <PaginationBar />

    </div>
  )
}

export default Cards