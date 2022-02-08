import { BrowserRouter, Route, Routes } from "react-router-dom";

import Admin from "./Practice/Admin";
import App1 from "./screens/App1";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Payment from "./Components/Payment/Payment";
import Signup from './Components/Signup/Signup.jsx';

function App() {
  return (
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<App1 />}></Route>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/signup" exact element={<Signup />}></Route>
          <Route path="/Footer" exact element={<Footer />}></Route>
          <Route path='/payment' exact element={<Payment />}></Route>
          <Route path='*' exact element={<PageNotFound />}></Route>
          <Route path='/admin' exact element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
