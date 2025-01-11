import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'

import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Page1 from './components/Page1'
import Show from './components/Show'
import { data } from './components/data'
import PageNotFound from './components/PageNotFound'





function App() {
  
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectCard = (card) => {
    setSelectedCard(card);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Page1 data={data} onSelect={handleSelectCard}/>
              </>
            }
          />
          <Route path="/card/:id" element={<Show cards={data} />} />
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App
