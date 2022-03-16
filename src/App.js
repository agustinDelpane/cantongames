import './App.css';
import NavBar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Item/ItemDetailContainer'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <>
          <NavBar/>

          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />    
            <Route path='/category/:id' element={ <ItemListContainer /> } /> 
            <Route path='/item/:id' element={ <ItemDetailContainer /> } /> 
            
          </Routes>
      </>
      </BrowserRouter>
    </div>

    
  )
}



export default App;
