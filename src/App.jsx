import './App.css'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx'
import LibraryPage from './components/Library/LibraryPage.jsx'
import Notes from './components/Notes/Notes.jsx'
import Carousel from './components/Carousel/Carousel.jsx'
import Calculator from './components/Calculator/CalculatorPage.jsx'
import Algorithms from './components/Algorithms/Algorithms.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path={'/algorithms'} element={<Algorithms />} />
      </Routes>
    </>
  )
}

export default App
