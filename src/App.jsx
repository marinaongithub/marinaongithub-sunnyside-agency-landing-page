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

  return (
    <>
      <Header></Header>
      <ImgCard src={egg} alt="egg image with yellow background"></ImgCard>
      <TxtCard></TxtCard>
      <ImgCard src={glass} alt="glass image with orange background"></ImgCard>
      <TxtImgCard></TxtImgCard>
      <ImgGallery></ImgGallery>
      <TxtImgCard></TxtImgCard>
      <Footer></Footer>
    </>
  )
}

export default App
