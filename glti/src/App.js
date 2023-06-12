import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';
import Home from './Overview/overview';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route exact path="/" component={Content}/> */}
        {/* <Route exact path="/" component={Tools}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
