import {Routes , Route} from "react-router-dom"
import Home from "./landing/home/Home.jsx"


import Navbar from "./Navbar.jsx"
import Signup from "./landing/signup/Signup.jsx"
import AboutPage from "./landing/about/AboutPage.jsx"
import ProductsPage from "./landing/product/ProductsPage.jsx"
import Pricingpage from "./landing/pricing/PricingPage.jsx"
import Supportpage from './landing/support/SupportPage.jsx'
import Footer from "./Footer.jsx"
import Notfound from "./Notfound.jsx"

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<Pricingpage />} />
      <Route path="/support" element={<Supportpage />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
    </>
    
  )
}

export default App
