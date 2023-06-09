import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route exact path="/" component={Content}/> */}
        {/* <Route exact path="/" component={Tools}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
