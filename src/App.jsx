import './App.css'
// components
import Header from './components/Header/Header.jsx'
import ImgCard from './components/ImgCard/ImgCard.jsx'
import ImgGallery from './components/ImgGallery/ImgGallery.jsx'
import TxtCard from './components/TxtCard/TxtCard.jsx'
import TxtImgCard from './components/TxtImgCard/TxtImgCard.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Footer from './components/Footer/Footer.jsx'
// images
import egg from '../src/assets/images/mobile/image-transform.jpg'
import glass from '../src/assets/images/mobile/image-stand-out.jpg'

function App() {

  const txtCards = {
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

  const txtImgCards = {
    card1: {
      "h2": "Graphic Design",
      "p": "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
      "color": "green"
    },
    card2: {
      "h2": "Photography",
      "p": "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
      "color": "blue",
    }
  }

  return (
    <>
      <Header></Header>
      <ImgCard src={egg} alt="egg image with yellow background"></ImgCard>
      <TxtCard h2={txtCards.card1.h2} p={txtCards.card1.p} color={txtCards.card1.color}></TxtCard>
      <ImgCard src={glass} alt="glass image with orange background"></ImgCard>
      <TxtCard h2={txtCards.card2.h2} p={txtCards.card2.p} color={txtCards.card2.color}></TxtCard>
      <TxtImgCard h2={txtImgCards.card1.h2} p={txtImgCards.card1.p} color={txtImgCards.card1.color}></TxtImgCard>
      <TxtImgCard h2={txtImgCards.card2.h2} p={txtImgCards.card2.p} color={txtImgCards.card2.color}></TxtImgCard>
      <Testimonials></Testimonials>
      <ImgGallery></ImgGallery>
      <TxtImgCard></TxtImgCard>
      <Footer></Footer>
    </>
  )
}

export default App
