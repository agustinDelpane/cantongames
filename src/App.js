import './App.css';
import NavBar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (

    
   <>
   <NavBar/>
   <ItemListContainer />
   <ItemCount initial={ 1 } stock={ 10 } />
   </>
  )
}



export default App;
