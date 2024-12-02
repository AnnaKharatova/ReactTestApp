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
        <Route path="/ReactTestApp/notes" element={<Notes />} />
        <Route path="/ReactTestApp/carousel" element={<Carousel />} />
        <Route path="/ReactTestApp/calculator" element={<Calculator />} />
        <Route path="/ReactTestApp/library" element={<LibraryPage />} />
        <Route path='/ReactTestApp/algorithms' element={<Algorithms />} />
      </Routes>
    </>
  )
}

export default App
