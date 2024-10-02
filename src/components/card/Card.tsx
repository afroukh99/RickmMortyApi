import React from 'react'
import { Character } from '../../types/types'
import "./card.scss"

const Card = (Character: Character) => {
  return (
    <div className='card'>
      <img src={Character.image} alt="" className="card__image" />
      <span className='card__specie'>{Character.species}</span>
      <div className="card__infos">
        <span className='card__infos__name'>Name : {Character.name}</span>
        <span className='card__infos__status'>Status : {Character.status}</span>
        <span className='card__infos__gender'>Gender : {Character.gender}</span>
      </div>
      <span className='card__details'>Details</span>
    </div>
  )
}

export default Card