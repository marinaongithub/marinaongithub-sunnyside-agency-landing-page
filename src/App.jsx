import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import ImgCard from './components/ImgCard/ImgCard.jsx'
import ImgGallery from './components/ImgGallery/ImgGallery.jsx'
import TxtCard from './components/TxtCard/TxtCard.jsx'
import TxtImgCard from './components/TxtImgCard/TxtImgCard.jsx'
import Footer from './components/Footer/Footer.jsx'



function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <ImgCard></ImgCard>
      <TxtCard></TxtCard>
      <TxtImgCard></TxtImgCard>
      <ImgGallery></ImgGallery>
      <TxtImgCard></TxtImgCard>
      <Footer></Footer>
    </>
  )
}

export default App
