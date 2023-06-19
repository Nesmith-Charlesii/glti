import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Navbar from './components/Navbar/navbar';
import Home from './components/Overview/overview';
import ContentTemplate from './components/Content/contentTemplate';

import WebFont from "webfontloader";

WebFont.load({
    google: {
        families: ["Raleway", "Inter"]
    }
})

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/content" element={<ContentTemplate/>}/>
        {/* <Route exact path="/" component={Tools}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
