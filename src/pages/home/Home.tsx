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
      <SearchInput/>
      
    </div>
  )
}

export default Home