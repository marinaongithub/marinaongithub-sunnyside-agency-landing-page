import './App.css'
import Header from './components/Header/Header.jsx'
import ImgCard from './components/ImgCard/ImgCard.jsx'
import ImgGallery from './components/ImgGallery/ImgGallery.jsx'
import TxtCard from './components/TxtCard/TxtCard.jsx'
import TxtImgCard from './components/TxtImgCard/TxtImgCard.jsx'
import Footer from './components/Footer/Footer.jsx'
import egg from '../src/assets/images/mobile/image-transform.jpg'
import glass from '../src/assets/images/mobile/image-stand-out.jpg'


function App() {

  const cards = {
    card1: {
      "h2": "Transform your brand",
      "p": "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      "color": "yellow"
    },
    card2: {
      "h2": "Stand out to the right audience",
      "p": "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ",
      "color": "red",
    }
  }

  return (
    <>
      <Header></Header>
      <ImgCard src={egg} alt="egg image with yellow background"></ImgCard>
      <TxtCard h2={cards.card1.h2} p={cards.card1.p} color={cards.card1.color}></TxtCard>
      <ImgCard src={glass} alt="glass image with orange background"></ImgCard>
      <TxtCard h2={cards.card2.h2} p={cards.card2.p} color={cards.card2.color}></TxtCard>
      <TxtImgCard></TxtImgCard>
      <ImgGallery></ImgGallery>
      <TxtImgCard></TxtImgCard>
      <Footer></Footer>
    </>
  )
}

export default App
