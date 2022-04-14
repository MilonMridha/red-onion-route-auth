
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Breakfast from './Components/Shared/Breakfast/Breakfast';
import Lunch from './Components/Shared/Lunch/Lunch';
import Dinner from './Components/Shared/Dinner/Dinner';
import AddMealToCart from './Components/Shared/AddMealToCart/AddMealToCart';

import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/breakfast/:foodId' element={<AddMealToCart></AddMealToCart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>



      </Routes>

    </div>
  );
}

export default App;
