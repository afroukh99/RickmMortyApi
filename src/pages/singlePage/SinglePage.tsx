import React from 'react'
import "./singlrPage.scss"

const SinglePage = () => {
  return (
    <div className='details'>
      <img src="/images/logo.png" alt="" className="details__logo" />
      <h1 className="details__title">
        Discover the Secrets of Rick Sanchez <br /> from the Rick and Morty Universe!" 🧬🚀
      </h1>
      <section className='details__card'>
        <img className='details__card__img' src="/images/rick.png" alt="" />
        <div className="details__card__infos">
          <div className="details__card__infos__container">
            <h1 className="details__card__infos__title">Rick Sanchez</h1>
            <ul className=''>
              <li>Status : Alive</li>
              <li>Species : Human</li>
              <li>Gender : Male</li>
            </ul>
            <p className='details__card__infos__about'>
              <span className="inner-txt">Rick Sanchez </span> is a <span className='inner-txt'>Male Human </span>
              who is currently <span className="inner-txt">Alive</span>
              . He remains a core figure in the <span className="inner-txt">human</span> species.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SinglePage