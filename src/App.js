import './App.css';
import { Route, Routes } from 'react-router-dom';
import BreadCrumbs from './components/layouts/breadcrumbs';
import Header from './components/layouts/header';
import Hero from './components/layouts/hero';
import SideBar from './components/layouts/sidebar';
import Footer from './components/layouts/footer';
import Home from './components/pages/home';
import Shop from './components/pages/shop';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';



function App() {
  const product1 = {
    name: "IPhone 15 PRM",
    price: 2000
  }
  const product2 = {
    name: "IPhone 14 PRM",
    price: 1900
  }
  const cat1 = {
    name: "IPhone",
  }
  return (
    <div className="App">
      <Header />
      <Hero />
      <BreadCrumbs />
      <section className="product spad">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
