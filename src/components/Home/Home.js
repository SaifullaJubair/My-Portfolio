import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Projects></Projects>
         <About></About>
         <Contact></Contact>
         <Footer></Footer>

      </div>
   );
};

export default Home;