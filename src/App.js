import './App.css';
import About from './components/about/About';
import Certificate from './components/certificate/Certificate';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Home from './components/home/Home';
import Project from './components/project/Project';
import Scrollup from './components/scrollup/Scrollup';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/> 
        <Skills/>
        <Certificate/>
        <Project/>
        <Contact/>
      </main>
      
      <Footer/>
      <Scrollup/>
    </>
  );
}

export default App;
