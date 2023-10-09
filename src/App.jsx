import { Route, Routes } from 'react-router-dom';
import './App.css';

import Allrest from './components/Allrest/Allrest';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Viewrest from './components/Viewrest/Viewrest'

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Header/>

      <Routes>
        {/* localhost:3000 - Allrest component*/}
        <Route path='/' element={<Allrest/>}/>
        {/* view particular restaurant */}
        <Route path='/view/:id' element={<Viewrest/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
