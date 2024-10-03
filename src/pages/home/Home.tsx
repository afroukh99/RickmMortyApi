import Cards from "../../components/cards/Cards"
import FilterSection from "../../components/filterSection/FilterSection"
import SearchInput from "../../components/search/SearchInput"
import "./home.scss"

const Home = () => {



  return (
    <div className='home'>
      <header>
        <img src="./images/logo.png" alt="" className="logo" />
        <div className="cover">
          <img src="./images/cover.png" alt="" className="cover__img" />
          <div className="cover__txt">
            <p className="">"Get Schwifty with the Multiverse Madness of Rick and Morty!" 🚀🧪</p>
          </div>
        </div>
      </header>
      <SearchInput  />
      <FilterSection />
      <section className="characters">
        <h1 className="characters__title">Meet the Wildest Characters <br />
          from the Rick and Morty Multiverse!</h1>
          <Cards/>
      </section>
    </div>
  )
}

export default Home