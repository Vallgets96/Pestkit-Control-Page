import  './index.css';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Imgslid from './Component/Aboutpest/Imageslider';
import Service from './Component/Service/Service';
import Services1 from './Component/Services1/Services1';
import Projects from './Component/Projects/Projects';


import SliderComponent from './Component/Blog/Blog';
import Signup from './Component/Signup/Signup';
import Pricing from './Component/Pricing/Pricing';
import Team from './Component/Teams/Teams';
import Testimonal from './Component/Testimonial/Testimonial';
import { Footer } from './Component/Footer/Footer';




function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Service/>
      <Imgslid/>
      <Services1/>
      <Projects/>
      <SliderComponent/>
      <Signup/>
      <Pricing/>
      <Team/>
      <Testimonal/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
