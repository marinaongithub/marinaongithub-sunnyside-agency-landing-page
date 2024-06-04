import './App.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import ImgCard from './components/ImgCard/ImgCard.jsx'
import ImgGallery from './components/ImgGallery/ImgGallery.jsx'
import TxtImgCard from './components/ImgCard/ImgCard.jsx'
import ImgTxtCard from './components/TxtCard/TxtCard.jsx'



function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <ImgCard></ImgCard>
      <TxtImgCard></TxtImgCard>
      <ImgGallery></ImgGallery>
      <ImgTxtCard></ImgTxtCard>
      <Footer></Footer>
    </>
  )
}

export default App
