import React from 'react';
import './App.css';
import Header from "./components/header"
import Home from './components/Home'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Basket from './Basket';
import SingleProduct from './singleproduct';
import SignIn from './components/SignIn';
import Payments from './components/paymentspage';

function App() {

  const [basket,setbasket]=React.useState([]);



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/" element={<><Header /></>}>
          <Route path="/" element={<Home setbasket={setbasket} /> }></Route>
          <Route path="/basket" element={<Basket basket={basket} setbasket={setbasket}/>}/>
          <Route path="/:productid" element={<SingleProduct setbasket={setbasket}/>}/>
          <Route path="/paymentspage/:total" element={<Payments/>} />
        </Route>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
