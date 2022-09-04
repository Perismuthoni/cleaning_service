
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Nav from './js/nav';
import Home from './js/home';
import Service from './js/service';
import Contact from './js/contact';
import NoPage from './js/404';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home/>} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
