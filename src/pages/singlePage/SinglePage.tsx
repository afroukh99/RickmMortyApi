import  { useEffect, useState } from 'react'
import "./singlrPage.scss"
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const SinglePage = () => {

  const [data, setData] = useState<any>({});
  const pathName = useParams()

      const url =`https://rickandmortyapi.com/api/character/${pathName.id}`

      useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(url);
            setData(res.data)
        }
        fetchData()
    }, [pathName.id]);



  return (
    <div className='details'>
      <Link to={"/"}>
        <img src="/images/logo.png" alt="" className="details__logo" />
      </Link>
      <h1 className="details__title">
        Discover the Secrets of {data.name} <br /> from the Rick and Morty Universe!" 🧬🚀
      </h1>
      <section className='details__card'>
        <img className='details__card__img' src={data.image} alt="" />
        <div className="details__card__infos">
          <div className="details__card__infos__container">
            <h1 className="details__card__infos__title">{data.name}</h1>
            <ul className=''>
              <li>Status : {data.status}</li>
              <li>Species : {data.species}</li>
              <li>Gender : {data.gender}</li>
            </ul>
            <p className='details__card__infos__about'>
              <span className="inner-txt">{data.name} </span> is a <span className='inner-txt'>{data.gender} {data.species} </span>
              who is currently <span className="inner-txt">{data.status}</span>
              . He remains a core figure in the <span className="inner-txt">{data.species}</span> species.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SinglePage